import React, { useEffect, useState } from 'react'
import { Card , Container, Button, Table} from 'react-bootstrap'
import navStyle from '../navbar.module.css'
import { NumericFormat } from 'react-number-format'

import Navbars from '../components/Navbars'

import profileImg from '../images/profile.svg'
import email from '../images/email.svg'
import phone from '../images/phone.svg'
import location from '../images/location.svg'
import userProfile from '../images/profile-user.png'
import brandIcon from '../images/brand-icon-black.svg'
import barcode from '../images/barcode.svg'

function PersonalInfo({user, userTrc}) {

//     const user = users
    
    console.log(userTrc)


  return (
    <>
    <Navbars navStyle={navStyle.navbar}/>

            <div className='w-100 d-flex flex-column justify-content-center align-items-center ' style={{background: "#E5E5E5", height: "max-content"}}>
                <Container className='w-75 mt-5' >
                    <Card>
                        <Card.Body className='d-flex justify-content-around px-4 py-5'>
                            <div>
                                <h3 className='mb-5 fs-2'>Personal Info </h3>
                                <div className='d-flex align-items-center mb-4'>
                                    <img src={profileImg} className="me-3" alt="" width='32px' height='32px'/>
                                    <div>
                                        <h6 className='m-0'>{user.fullName}</h6>
                                        <p className='m-0' style={{fontSize: "14px", color:"#8A8C90"}}>Full Name</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center mb-4'>
                                    <img src={email} className="me-3" alt="" width='32px' height='32px'/>
                                    <div>
                                        <h6 className='m-0'>{user.email}</h6>
                                        <p className='m-0' style={{fontSize: "14px", color:"#8A8C90"}}>Email</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center mb-4'>
                                    <img src={phone} className="me-3" alt="" width='32px' height='32px'/>
                                    <div>
                                        <h6 className='m-0'>{user.phone}</h6>
                                        <p className='m-0' style={{fontSize: "14px", color:"#8A8C90"}}>Mobile Phone</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center mb-4'>
                                    <img src={location} className="me-3" alt="" width='32px' height='32px'/>
                                    <div>
                                        <h6 className='m-0'>Perumahan Permata Bintaro Residence C-3</h6>
                                        <p className='m-0' style={{fontSize: "14px", color:"#8A8C90"}}>Address</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <img src={userProfile} alt="" />
                                <Button variant="warning" className='mt-2 text-light fw-semibold'>Change Photo Profile</Button>
                            </div>
                        </Card.Body>
                    </Card>
        
                </Container>
                <Container className='w-75'>
                <div className='my-5'>
                        <h3 className='mb-5'>History Trip</h3>

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
                                          item.approve === true ?
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
                                        <img src={barcode} alt="" />
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
        
                        
                    </div>
                </Container>
                    
            </div>
    
    </>
    
  )
}

export default PersonalInfo