import React from 'react'
import { Container, Form, Button, InputGroup } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import navStyle from '../navbar.module.css'

function AddTrip() {
  return (
    <div>
        <Navbars navStyle={navStyle.navbar}/>
        <Container className='mt-5'>
            <h3>Add Trip</h3>

            <Container className='w-75 mt-5 py-5 px-4 rounded shadow'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title Trip</Form.Label>
                        <Form.Control type="text" placeholder="Input Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Select className="mb-3" aria-label="Default select example">
                            <option>Select Country</option>
                            <option value="1">Indonesia</option>
                            <option value="2">Tangerang</option>
                            <option value="3">Surabaya</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Accommodation</Form.Label>
                        <Form.Control type="text" placeholder="Input Accommodation" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Transportation</Form.Label>
                        <Form.Control type="text" placeholder="Input Transportation" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Eat </Form.Label>
                        <Form.Control type="text" placeholder="Input Eat " />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Duration</Form.Label>
                        <div className='d-flex gap-5'>
                            <div className='d-flex w-25 align-items-center'>
                                <Form.Control type="text" className='me-3' />
                                <Form.Label className='mb-0'>Day </Form.Label>
                            </div>
                            <div className='d-flex w-25 align-items-center'>
                                <Form.Control type="text" className='me-3'/>
                                <Form.Label className='mb-0'>Night </Form.Label>
                            </div>
                        </div>
                    
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date Trip</Form.Label>
                        <Form.Control type="date" placeholder="Input Date Trip" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Input Price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Quota</Form.Label>
                        <Form.Control type="number" placeholder="Input Quota" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" />
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