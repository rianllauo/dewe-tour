import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import navStyle from '../navbar.module.css'

import TourCard from '../components/molekul/TourCard'
import Navbars from '../components/Navbars'
import { Link } from 'react-router-dom'

function IncomeTrip({data}) {

  return (
    <div>
        <Navbars navStyle={navStyle.navbar}/>
        <Container>
            <div className='d-flex justify-content-between mt-5'>
                <h3>Income Trip</h3>
                <Link to="/add-trip">
                    <Button variant='warning' className='text-light fw-semibold'>Add Trip</Button>
                </Link>
            </div>

            <div className='d-flex flex-wrap justify-content-evenly gap-3'>
            {
                data.map(item => (
                    <TourCard 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        capacity={item.capacity}
                        country={item.country}
                        price={item.price}
                    />
                ))
            }
            </div>

            
                
        </Container>
        

    </div>
  )
}

export default IncomeTrip