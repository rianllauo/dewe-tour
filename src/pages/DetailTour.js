import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

import { dataTour } from '../dataTour';
import { Card, Container, Navbar, Row, Col, Button } from 'react-bootstrap';
import Navbars from '../components/Navbars';

// icon
import hotel from "../images/hotel.svg"
import plane from "../images/plane.svg"
import meal from "../images/meal.svg"
import time from "../images/time.svg"
import calendar from "../images/meal.svg"


function DetailTour() {

    let idTour = useParams()
    const data = dataTour();

    
    let [person, setPerson] = useState(1)
    let [price, setPrice] = useState(0)
    let [prices, setPrices] = useState(0)

    useEffect(() => {
        data.map(item => {
            if (item.id == idTour.id)
            return setPrices(item.price), setPrice(item.price)
        })
    }, [])  

    console.log(prices)  


    function increment(){
        setPrice(price + prices)
        setPerson(person + 1)
    }

    function decrement(){
        if (person > 0 ){
            setPrice(price - prices)
            setPerson(person - 1)
        }
    }
 
    return (
        <>
        <Navbars/>
        <div className=''>
            {data.map(data => {
                if (data.id == idTour.id){
                    return(
                        <Container key={data.id} className='mt-5'>
                            <h1>{data.title}</h1>
                            <p>{data.country}</p>
                            <Container>
                                <Row>
                                    <Col>
                                        <div className='rounded overflow-hidden mb-4'>
                                            <img className='w-100 ' style={{height: 360, objectFit: "cover",}} src={require(`../images/data-image/${data.image}`)} alt="" />
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
                                            Hotel 4 Nights
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Transportation</h5>
                                        <p className='d-flex align-items-center fs-4 fw-semibold'>
                                            <img className='me-2' src={plane} alt="" />
                                            Qatar Airways
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Eat</h5>
                                        <p className='d-flex align-items-center fs-4 fw-semibold'>
                                            <img className='me-2' src={meal} alt="" />
                                            Included as ltinerary
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Duration</h5>
                                        <p className='d-flex align-items-center fs-4 fw-semibold'>
                                            <img className='me-2' src={time} alt="" />
                                            6 Day 4 Night
                                        </p>
                                    </div>

                                    <div className='mt-3'>
                                        <h5 className='fs'>Date Trip</h5>
                                        <p className='d-flex align-items-center fs-5 fw-semibold'>
                                            <img className='me-2' src={calendar} alt="" />
                                            26 August 2020
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>Description</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p style={{color: "#FFAF00", fontSize:"24px", fontWeight: "700"}}>
                                    <NumericFormat value={`${data.price}`} displayType={'text'} thousandSeparator="," prefix={'IDR. '} style={{color: "#FFAF00", fontSize:"24px", fontWeight: "700"}} />
                                     / person
                                </p>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button onClick={() => decrement(data.price)} variant='warning' className='text-light fs-3 py-0'>-</Button>
                                    <p className='m-0 p-4'>{person}</p>
                                    <Button onClick={() => increment(data.price)} variant='warning' className='text-light fs-3 py-0'>+</Button>
                                </div>
                            </div>
                            <div className='my-4 d-flex justify-content-between align-items-center'>
                                <h3 className='fw-semibold'>Total: </h3>
                                <NumericFormat value={price} displayType={'text'} thousandSeparator="," prefix={'IDR. '} style={{color: "#FFAF00", fontSize:"24px", fontWeight: "700"}} />
 
                                {/* <p className='fw-semibold fs-4' style={{color: "#FFAF00"}}>IDR. 12,398,000</p> */}
                            </div>
                            <div className='w-100 d-flex justify-content-end my-4'>
                                <Button variant='warning' className='text-light fw-semibold'>Book Now</Button>
                            </div>
                        </Container>
                    )
                }
                })}
        </div>
        </>
    )
}

export default DetailTour