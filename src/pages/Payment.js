import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button, Container, Card, Table } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import { NumericFormat } from 'react-number-format'
import navbarStyle from '../navbar.module.css'
import moment from 'moment'

// icon / image
import brandIcon from "../images/brand-icon-black.svg"
import recipe from "../images/recipe.png"

// component
import PaymentSuccessModal from "../components/molekul/PaymentSuccessModal"
import { useState } from 'react'
import Footer from '../components/Footer'

function Payment({totalPrice, data, person, user}) {

  const params = useParams()

  const [show, setShow] = useState(false);

  const dateNow = new Date()
  const date = moment(dateNow).format("dddd, D MMMM YYYY")
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataPrices, setDataPrice] = useState({
    
    qyt: person,
    price: totalPrice,
    date: date,
    title: "",
    country: "",
    dateTrip: "",
    duration: "",
    accomodation: "",
    transportation: "",
  }) 

  // console.log(user.fullName)

  useEffect(() => {
    data.map(item => {
      if (item.id == params.id){
        setDataPrice({
          ...dataPrices,
          userName: user.fullName,
          title: item.title,
          country: item.country,
          dateTrip: item.dateTrip,
          duration: `${item.day} Day ${item.night} Night`,
          accomodation: item.accomodation,
          transportation: item.transportation,
          approve: false
        })
    }})
  }, [])


  const submitForm = async(e) => {
    e.preventDefault()

    const data = dataPrices

        await fetch(`https://63987d90044fa481d69f8389.mockapi.io/user/${user.id}/transaction`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            } 
        })

        handleShow()
  }


  return (
    <>
      <Navbars navStyle={navbarStyle.navbar}/>  

      {
        data.map(item => {
          if (item.id == params.id){
            return (
            <>
              <Container className='mt-5'>
                <Card className='mb-3'>
                  <Card.Body className='px-5'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <img src={brandIcon} alt="" />
                        <div className='d-flex flex-column justify-content-center text-end'>
                            <h3 className='m-0'>Booking</h3>
                            <p className='m-0 pt-2' style={{color: "#999"}}>{date}</p>
                        </div>
                      </div>
        
                      <div className='mt-5 d-flex justify-content-between align-items-start'>
                          <div >
                              <h5>{item.title}</h5>
                              <p style={{color: "#959595"}}>{item.country}</p>
                              <div className='rounded mt-4' style={{width: "max-content", padding: "10px 13px", background: "#fca5a5", color: "#dc2626", fontWeight: "500", fontSize: "14px", textAlign: "center"}}>Waiting Payment</div>
                          </div>
                          <div>
                              <div>
                                  <h6>Date Trip</h6>
                                  <p style={{color: "#959595"}}>{item.dateTrip}</p>
                              </div>
                              <div className='mt-4'>
                                  <h6>Accomodation</h6>
                                  <p style={{color: "#959595"}}>{item.accomodation}</p>
                              </div>
                          </div>
                          <div>
                            <div>
                                <h6>Duration</h6>
                                <p style={{color: "#959595"}}>{item.day} Day {item.night} Night</p>
                            </div>
                            <div className='mt-4'>
                                <h6>Transporartion</h6>
                                <p style={{color: "#959595"}}>{item.transportation}</p>
                            </div>
                          </div>
        
                          <div>
                            <img src={recipe} alt="" />
                          </div>
                      </div>
        
                               
                      <div className='mt-5'>
                          <Table borderless >
                              <thead>
                                  <tr>
                                      <th>No</th>
                                      <th>Full Name</th>
                                      <th>Gender</th>
                                      <th>Phone</th>
                                  </tr>
                              </thead>
                              <tbody >
                                  <tr>
                                      <td>1</td>
                                      <td>{user.fullName}</td>
                                      <td>random</td>
                                      <td>{user.phone}</td>
                                      <td className='fw-semibold'>QTY</td>
                                      <td className='fw-semibold'> <span className='me-4'>:</span>
                                      {person}
                                      </td>
                                  </tr>
                                  <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td className='fw-semibold'>Total</td>
                                      <td className='fw-semibold'><span className='me-4'>:</span>
                                        <NumericFormat value={totalPrice} prefix="IDR ." thousandSeparator="," displayType='text'/>
                                      </td>
                                  </tr>
                                
                              </tbody>
                          </Table>
                              
                      </div>
                                
                  </Card.Body>
                </Card>
              </Container>
                
              
              <Container>
                <div className='d-flex w-100 justify-content-end my-4'>

                      <form onSubmit={submitForm}>
                       <Button variant="warning" className='fs-6 text-light py-1 fw-semibold px-5' type='submit'>Pay</Button> 
                     </form>
                     
                </div>

                <PaymentSuccessModal show={show} handleClose={handleClose} id={item.id}/>
              </Container>
            
            </>
            )
          }
        })
      }
      <Footer />
      </>
  )
}

export default Payment