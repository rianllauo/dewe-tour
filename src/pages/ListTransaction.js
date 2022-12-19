import {useEffect, useState} from 'react'
import { Table, Container, Button, Modal, Card } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import navStyle from '../navbar.module.css'
import brandIcon from '../images/brand-icon-black.svg'
import barcode from '../images/barcode.svg'

// 
import searchIcon from '../images/search-icon.svg'
import ModalApprove from '../components/ModalApprove'

function ListTransaction() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    // const p = user.filter(
    //     (x) => x.transaction != 0
    // )

    // const coba = p.map(item => {
    //     return item.transaction
    // }).flat()

    // const hasil = coba.map(item => {return item })

    // let h = []

    // hasil.forEach((x,index) => {
    //     h.push(
            
    //     )
    // });

    // setInterval(() => {
    //     handleClose()
    // }, 4000);
    console.log(show)
  return (
    

    <div>
        <Navbars navStyle={navStyle.navbar}/>
        <Container className='mt-5'>
            <h4>Income Transaction</h4>

            <Table striped>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Trip</th>
                        <th>Bukti Transfer</th>
                        <th>Status Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
               
                
                 <tbody>
                                        
                    <tr >
                        <td></td>
                        <td>a</td>
                        <td>6D/4N Fun Tassie Vaca ...</td>
                        <td>bca.jpg</td>
                        <td>pending</td>
                        <td>
                            <Button onClick={handleShow} className='p-0 bg-transparent border-0'>
                                <img src={searchIcon} alt="" />
                            </Button>
                        </td>
                    </tr>  
                    
                 </tbody>
                                
            </Table>
        </Container>
        
    </div>
  )

}

export default ListTransaction