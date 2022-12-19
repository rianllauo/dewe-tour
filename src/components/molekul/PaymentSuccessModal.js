import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function PaymentSuccessModal({show, handleClose}) {

  return (
    <>
      <Modal show={show}>
        <Modal.Body className='py-3 px-5'>
            
            <h5 className='text-center mb-0 fw-normal fs-6'>Your payment will be confirmed within 1 x 24 hours
               <br/> To see orders click <Link to={`/payment-success`}>Here</Link> thank you</h5>
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentSuccessModal