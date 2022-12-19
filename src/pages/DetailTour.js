import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import navbarStyle from '../navbar.module.css'
// import '../index.css'
import { Card, Container, Navbar, Row, Col, Button } from 'react-bootstrap';
import Navbars from '../components/Navbars';

// icon
import hotel from "../images/hotel.svg"
import plane from "../images/plane.svg"
import meal from "../images/meal.svg"
import time from "../images/time.svg"
import calendar from "../images/meal.svg"
import Footer from '../components/Footer';
import BookModalError from '../components/molekul/BookErrorModal';


function DetailTour({dataTour, person, setPerson, totalPrices, increment, decrement, setPrices, setTotalPrice}) {

    let idTour = useParams()
    // let data = dataTour
    const dataUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        dataTour.map(item => {
            if (item.id == idTour.id)
            return setPrices(item.price), setTotalPrice(item.price), setPerson(1)
        })
    }, [])

    // console.log({totalPrice})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <Navbars navStyle={navbarStyle.navbar}/>
        <div className=''>
            {dataTour.map(data => {
                if (data.id == idTour.id){
                    return(
                        <Container key={data.id} className='mt-5'>
                            <h1>{data.title}</h1>
                            <p>{data.country}</p>
                            <Container>
                                <Row>
                                    <Col>
                                        <div className='rounded overflow-hidden mb-4'>
                                            <img className='w-100 ' style={{height: 360, objectFit: "cover",}} src={data.image} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    <img className='w-100 h-100' style={{objectFit: "cover",}} src={require(`../images/detail-img1.png`)} alt="" />
                                    </Col>
                                    <Col>
                                    <img className='w-100 h-100' style={{objectFit: "cover",}} src={require(`../images/detail-img2.png`)} alt="" />
                                    </Col>
                                    <Col>
                                    <img className='w-100 h-100' style={{objectFit: "cover",}} src={require(`../images/detail-img3.png`)} alt="" />
                                    </Col>

                                </Row>
                            </Container>
                            <div className='mt-4'>
                                <h4>Information Trip</h4>
                                <div className='d-flex justify-content-between'>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Accomodation</h5>
                                        <p className='d-flex align-items-center fs-4 fw-semibold'>
                                            <img className='me-2' src={hotel} alt="" />
                                            {data.accomodation}
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Transportation</h5>
                                        <p className='d-flex align-items-center fs-4 fw-semibold'>
                                            <img className='me-2' src={plane} alt="" />
                                            {data.transportation}
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Eat</h5>
                                        <p className='d-flex align-items-center fs-4 fw-semibold'>
                                            <img className='me-2' src={meal} alt="" />
                                            {data.eat}
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Duration</h5>
                                        <p className='d-flex align-items-center fs-4 fw-semibold'>
                                            <img className='me-2' src={time} alt="" />
                                            {data.day} Day {data.night} Night
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Date Trip</h5>
                                        <p className='d-flex align-items-center fs-5 fw-semibold'>
                                            <img className='me-2' src={calendar} alt="" />
                                            {data.dateTrip}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>Description</h3>
                                <p>{data.description}</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p style={{color: "#FFAF00", fontSize:"24px", fontWeight: "700"}}>
                                    <NumericFormat className='me-2' value={`${data.price}`} displayType={'text'} thousandSeparator="," prefix={'IDR. '} style={{color: "#FFAF00", fontSize:"24px", fontWeight: "700"}} />
                                     / person
                                </p>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button onClick={() => decrement()} variant='warning' className='text-light fs-3 py-0'>-</Button>
                                    <p className='m-0 p-4'>{person}</p>
                                    <Button onClick={() => increment()} variant='warning' className='text-light fs-3 py-0'>+</Button>
                                </div>
                            </div>
                            <div className='my-4 d-flex justify-content-between align-items-center'>
                                <h3 className='fw-semibold'>Total: </h3>
                                <NumericFormat value={totalPrices} displayType={'text'} thousandSeparator="," prefix={'IDR. '} style={{color: "#FFAF00", fontSize:"24px", fontWeight: "700"}} />
                            </div>
                            <div className='w-100 d-flex justify-content-end my-4'>
                                {
                                    dataUser != null ? 
                                    <Link to={`/payment/${data.id}`}>
                                        <Button variant='warning' className='text-light fw-semibold'>
                                            Book Now
                                        </Button>
                                    </Link>
                                    
                                    :
                                    <>
                                        <Button onClick={handleShow} variant='warning' className='text-light fw-semibold'>
                                            Book Now
                                        </Button>
                                        <BookModalError show={show} handleClose={handleClose} />
                                    </>
                                    
                                }
                                
                            </div>
                            {/* <Payment style={{display: "none"}} price={totalPri ce}/> */}
                        </Container>
                    )
                }
                })}
        </div>
        <Footer />
        </>
    )
}

export default DetailTour