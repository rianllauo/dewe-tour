import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function BookModalError({show, handleClose, id}) {

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className='bg-warning rounded text-light py-3 px-5'>
            
            <h5 className='text-center mb-0 fw-semibold'>Silahkan Login / Register untuk melanjutkan pemesanan</h5>
            <div className='w-100 d-flex justify-content-end'>
                {/* <Link to={``}>
                    <Button variant="warning text-light fw-semibold py-1 px-4" onClick={handleClose}>
                        Detail
                    </Button>
                </Link> */}
                
            </div>
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookModalError