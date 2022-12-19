import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Card, Table,  } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import { NumericFormat } from 'react-number-format'
import navbarStyle from '../navbar.module.css'

// icon / image
import brandIcon from "../images/brand-icon-black.svg"
import recipe from "../images/recipe.png"

// component

function PaymentSuccess({totalPrice, data, person, userTrc, user}) {

  const params = useParams()

  return (
    <>
      <Navbars navStyle={navbarStyle.navbar}/>  

      <Container className='mt-5 w-75'>

      {
                        userTrc.map(item => (
                        <Card className='mb-3'>
                            <Card.Body className='px-5'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <img src={brandIcon} alt="" />
                                    <div className='d-flex flex-column justify-content-center text-end'>
                                        <h3 className='m-0'>Booking</h3>
                                        <p className='m-0' style={{color: "#999"}}>{item.date}</p>
                                    </div>
                                </div>
        
                                <div className='mt-5 d-flex justify-content-between align-items-start'>
                                    <div >
                                        <h5>{item.title}</h5>
                                        <p style={{color: "#959595"}}>{item.country}</p>

                                        {
                                          item.approve == true ?
                                          <div className='rounded mt-4' style={{width: "max-content", padding: "10px 14px", background: "#d9f99d", color: "#84cc16", fontWeight: "600", fontSize: "14px", textAlign: "center"}}>Approve</div>
                                          :
                                          <div className='rounded mt-4' style={{width: "max-content", padding: "10px 14px", background: "#fef08a", color: "#eab308", fontWeight: "600", fontSize: "14px", textAlign: "center"}}>Waiting To Approve</div>
                                        }
                                        
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
                                            <p style={{color: "#959595"}}>{item.duration}</p>
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
                                                <td className='fw-semibold'> <span className='me-4'>:</span>{item.qyt}</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className='fw-semibold'>Total</td>
                                                <td className='fw-semibold'><span className='me-4'>:</span><NumericFormat value={item.price} prefix="IDR ." thousandSeparator="," displayType='text'/></td>
                                            </tr>
                                          
                                        </tbody>
                                    </Table>
                                        
                                </div>
                                
                            </Card.Body>
                        </Card>
                                ))
                            
                        }
                        </Container>
        
    </>
  )
}

export default PaymentSuccess