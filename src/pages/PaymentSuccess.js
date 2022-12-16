import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import { NumericFormat } from 'react-number-format'
import navbarStyle from '../navbar.module.css'

// icon / image
import icon from "../images/brand-icon-black.svg"

// component

function PaymentSuccess({totalPrice, data, person}) {

  const params = useParams()
  const dataTour = data

  return (
    <>
      <Navbars navStyle={navbarStyle.navbar}/>  

      {
        dataTour.map(item => {
          if (item.id == params.id){
            return (
            <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{background: "#E5E5E5", width: "100%", height: "100vh"}}>
              <Container className=' p-4 rounded' style={{background: "white"}}>
                  <div className='w-100 d-flex justify-content-between'>
                    <img src={icon} alt="" />
                    <div>
                      <h1 className='fw-semibold'>Booking</h1>
                      <p> <span className='fw-semibold'>Saturday</span>, 22 Juy 2020</p>
                    </div>
                  </div>

                  <div className='d-flex align-items-start justify-content-between gap-3'>

                    <div>
                      <h4 className='fw-bold'>{item.title}</h4>
                      <p>{item.country}</p>
                      <div className='w-50 rounded d-flex justify-content-center align-items-center' style={{padding: "8px 10px", background: "#fed7aa"}}>
                        <p className='fw-semibold m-0' style={{color: "#f97316"}}>Waiting Approve</p>
                      </div>
                    </div>

                    <div>
                      <h4 className='fw-semibold'>Date Trip</h4>
                      <p>26 August 2020</p>

                      <h4 className='fw-semibold'>Accomodation</h4>
                      <p>Hotel 4 Nights</p>
                    </div>

                    <div>
                      <h4 className='fw-semibold'>Duration</h4>
                      <p>6 Day 4 Night</p>

                      <h4 className='fw-semibold'>Transporartion</h4>
                      <p>Qatar Airways</p>
                    </div>

                    <div>
                      <img src={require("../images/recipe.png")} alt="" />
                      <p>upload payment proof</p>
                    </div>

                  </div>

                  <div className='d-flex justify-content-between'>
                    <div>
                      <h4>No</h4>
                      <p>1</p>
                    </div>
                    <div>
                      <h4>Full Name</h4>
                      <p>Rian tamvan</p>
                    </div>
                    <div>
                      <h4>Gender</h4>
                      <p>random</p>
                    </div>
                    <div>
                      <h4>Phone</h4>
                      <p>0882123123</p>
                    </div>
                    <div className='mt-4'>
                      <div className='d-flex align-items-center'>
                        <h4>Qty <span className='ms-4'>:</span> </h4>
                        <p className='mb-0 ms-4'>{person}</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <h4 className='m-0'>Total <span className='ms-4'>:</span></h4>
                        <NumericFormat className='ms-4' value={totalPrice} displayType={'text'} thousandSeparator="," prefix={'IDR. '} style={{color: "#FFAF00", fontSize:"20px", fontWeight: "700"}} />
                      </div>
                    </div>
                  </div>
                  
                  
              </Container>
              {/* <Container>
                <div className='d-flex w-100 justify-content-end mt-4'>
                  <Button variant='warning' className='fs-5 text-light py-1 fw-semibold px-5'>Pay</Button>
                </div>
              </Container> */}
            </div>
            </>
            )
          }
        })
      }
        
    </>
  )
}

export default PaymentSuccess