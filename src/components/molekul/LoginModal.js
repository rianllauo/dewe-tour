import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

function LoginModal({show, handleClose}) {

  const [dataUser, setDataUser] = useState()
  const navigate = useNavigate()
  const [error, setError] = useState('d-none')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async() => {
    const response = await fetch('https://63987d90044fa481d69f8389.mockapi.io/user')
    const data = await response.json()

    setDataUser(data)
  }

  function hide(){
    setEmail('')
    setPassword('')
    setError('d-none')
    handleClose()
  }

  function handleSubmit(e){
    e.preventDefault()
    dataUser.map(user => {
      if(user.email == email && user.password == password){
        handleClose()
        setError('d-none')
        
        localStorage.setItem('user', JSON.stringify(user))
        
        Swal.fire({
          icon: 'success',
          title: 'Berhasil login',
          showConfirmButton: false,
          timer: 2000
        })

        setInterval(() => {
          navigate(0)
        }, 2000)
        
        
      }else{
        setError('')
      }
    })

  }

  console.log(email) 


  return (
    <>
      <Modal size="sm" show={show} onHide={hide} centered>
        <Modal.Body className='p-3'>
            <h1 className='text-center fs-4 fw-semibold'>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Alert  variant="danger" className={`py-2 px-4 ${error}`}>
              Wrong email or password
            </Alert>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" ontrolId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant='warning' type='submit' className='text-light w-100'>Login</Button>
          </Form>
          <p className='mt-3' style={{fontSize: 16, color: "#B1B1B1"}}>Don't have an account? <a href="" style={{color: "#B1B1B1"}}>Klik Here</a></p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;