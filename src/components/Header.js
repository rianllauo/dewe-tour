import React from 'react'
import { Container } from 'react-bootstrap'
import Navbars from './Navbars'
import "../index.css"
import SearchBar from './molekul/SearchBar'

function Header() {
  return (
    <div className='header'>    
      <Navbars /> 
        <div className='w-100 h-100 d-flex flex-column justify-content-center text-light'>
            <Container style={{marginTop: "-60px"}}>
                <h1 className='fw-semibold' style={{fontSize: 54}}>Explore</h1>
                <h2 style={{fontWeight: "300", fontSize: 54}}>your amazing city together</h2>
                <SearchBar/>
            </Container>
        </div>    
    </div>
  )
}

export default Header