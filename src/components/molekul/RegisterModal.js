import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function RegisterModal({show, handleClose}) {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()

  
  const register = async(e) => {
    e.preventDefault()
    const user = {fullName, email, password, phone}

    await fetch('https://63987d90044fa481d69f8389.mockapi.io/user', {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    setFullName('')
    setEmail('')
    setPassword('')
    setPhone('')

    handleClose()
    navigate(0)
    Swal.fire({
      icon: 'success',
      title: 'Horee, aku kamu berhasil di buat',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <>
      <Modal size="sm" show={show} onHide={handleClose} centered>
        <Modal.Body className='p-3'>
            <h1 className='text-center fs-4 fw-semibold'>Register</h1>

          <Form onSubmit={register}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>
            <Button variant='warning' type='sumbit' className='text-light w-100'>Register</Button>
          </Form>

          {/* <p className='mt-3' style={{fontSize: 16, color: "#B1B1B1"}}>Don't have an account? <a href="" style={{color: "#B1B1B1"}}>Klik Here</a></p> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;