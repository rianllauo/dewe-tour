import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Alert} from 'react-bootstrap'
import Navbars from '../components/Navbars'
import navStyle from '../navbar.module.css'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import {  useNavigate } from 'react-router'
import moment from 'moment'

// firebse
import { storage } from '../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { v4 } from "uuid";


function AddTrip() {

    const moment = extendMoment(Moment)
    const navigate = useNavigate()

    const [dataPrice, setDataPrice] = useState()
    const [date, setDate] = useState()

    const [dataTrip, setDataTrip] = useState(
        {
            title: "",
            country: "",    
            accomodation: "",
            transportation: "",
            eat: "",
            day: "",
            night: "",
            // dateTrip: "",
            // price: 0,
            quota: "",
            description: "",
            image: null,
        }
    )

    const [imageUpload, setImageUpload] = useState(null)
    const [img, setImg] = useState()
    const [alert, setAlert] = useState('d-none')


    const uploadImage = () => {
        if (imageUpload == null) return

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}` )

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
        setAlert('')
        getDownloadURL(snapshot.ref).then((url) => {
            setImg(url)
            })
        })

    }

    const handleOnChange = (e) => {
        setDataTrip({
            ...dataTrip,
            [e.target.name]: e.target.value,
        })

    }

    const handleChangePrice = (e) => {
        setDataPrice(e.target.value)
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }

    const handleChangeImage = (e) => {
        setImageUpload(e.target.files[0])
    }

    useEffect(() => {
        setDataTrip({
            ...dataTrip,
            image: img,
        })
    }, [img])

    useEffect(() => {
        setDataTrip({
            ...dataTrip,
            price: Number(dataPrice) 
        })
    }, [dataPrice])

    useEffect(() => {
        setDataTrip({
            ...dataTrip,
            dateTrip: moment(date).format("d MMMM  YYYY")
        })
    }, [date])
    
    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = dataTrip

        await fetch('https://63987d90044fa481d69f8389.mockapi.io/dataTour',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            } 
        })

        navigate('/income-trip')
        navigate(0)
    }


  return (
    <div>
        <Navbars navStyle={navStyle.navbar}/>
        <Container className='mt-5'>
            <h3>Add Trip</h3>

            <Container className='w-75 mt-5 py-5 px-4 rounded shadow'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title Trip</Form.Label>
                        <Form.Control   
                            name="title"
                            type="text" 
                            placeholder="Input Title"
                            value={dataTrip.title}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Select 
                            name="country"
                            className="mb-3" 
                            aria-label="Default select example"
                            value={dataTrip.country}
                            onChange={handleOnChange}
                        >
                            <option>Select Country</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="Australia">Australia</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Japan">Japan</option>
                            <option value="Singapure">Singapure</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Accommodation</Form.Label>
                        <Form.Control 
                            name='accomodation'
                            type="text" 
                            placeholder="Input Accommodation" 
                            value={dataTrip.accomodation}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Transportation</Form.Label>
                        <Form.Control 
                            name='transportation'
                            type="text" 
                            placeholder="Input Transportation" 
                            value={dataTrip.transportation}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Eat</Form.Label>
                        <Form.Select 
                            name="eat"
                            className="mb-3" 
                            aria-label="Default select example"
                            value={dataTrip.eat}
                            onChange={handleOnChange}
                        >
                            <option>Select Eat</option>
                            <option value="Included as ltinerary">Included as ltinerary</option>
                            <option value="Bawa Makan Sendiri">Bawa Makan Sendiri</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Duration</Form.Label>
                        <div className='d-flex gap-5'>
                            <div className='d-flex w-25 align-items-center'>
                                <Form.Control 
                                    name="day"
                                    type="number" 
                                    className='me-3'
                                    value={dataTrip.day}
                                    onChange={handleOnChange} 
                                />
                                <Form.Label className='mb-0'>Day </Form.Label>
                            </div>
                            <div className='d-flex w-25 align-items-center'>
                                <Form.Control 
                                    name="night"
                                    type="number" 
                                    className='me-3'
                                    value={dataTrip.night}
                                    onChange={handleOnChange}
                                />
                                <Form.Label className='mb-0'>Night </Form.Label>
                            </div>
                        </div>
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date Trip</Form.Label>
                        <Form.Control 
                            name='dateTrip'
                            type="date" 
                            placeholder="Input Date Trip" 
                            value={date}
                            onChange={handleChangeDate}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name='price'
                            type="number"
                            placeholder="Input Price" 
                            value={dataTrip.price}
                            onChange={handleChangePrice}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Quota</Form.Label>
                        <Form.Control 
                            name="quota"
                            type="number" 
                            placeholder="Input Quota" 
                            value={dataTrip.quota}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            name='description'
                            as="textarea" 
                            rows={3} 
                            value={dataTrip.description}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            name='image'
                            type="file" 
                            // value={dataTrip.image}
                            onChange={handleChangeImage}
                        />

                        <Alert variant='success' className={`${alert} py-2 mt-3 mb-0`}>
                            Image Success Uploaded
                        </Alert>
                        <Button className='mt-3' onClick={uploadImage}>Upload Image</Button>
                    </Form.Group>


                    
                    <div className='d-flex w-100 justify-content-center'>
                        <Button className='mt-4 text-light fw-semibold py-2 px-4' variant="warning" type="submit">
                            Submit
                        </Button>
                    </div>
                    
                </Form>
            </Container>
            

        </Container>
    </div>
  )
}

export default AddTrip