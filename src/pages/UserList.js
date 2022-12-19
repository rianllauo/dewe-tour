import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import navStyle from '../navbar.module.css'

function UserList({allUser}) {

   console.log(allUser)


  return (
    <div>
        <Navbars navStyle={navStyle.navbar}/>

        <Container className='mt-5'>
                <h3>User List</h3>
                    <Table striped className='mt-3'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {
                        allUser.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.role}</td>
                            </tr>
                         ))
                        }
                        </tbody>
                    </Table>
               
            
        </Container>
        
    </div>
  )
}

export default UserList