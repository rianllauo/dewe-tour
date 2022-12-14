import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LoginModal({show, handleClose}) {
  

  return (
    <>
      <Modal size="sm" show={show} onHide={handleClose} centered>
        <Modal.Body className='p-3'>
            <h1 className='text-center fs-4 fw-semibold'>Login</h1>
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' />
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