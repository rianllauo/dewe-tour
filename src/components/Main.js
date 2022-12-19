import React from 'react'
import { Container } from 'react-bootstrap'
import HomeCard from './molekul/HomeCard'

import guarantee from '../images/guarantee.svg'
import heart from '../images/heart.svg'
import agent from '../images/agent.svg'
import support from '../images/support.svg'
import TourCard from './molekul/TourCard'

function Main({data}) {
  return (
    <main style={{background: "#E5E5E5", width: "100%", paddingBottom: "20px"}}>
        <Container className='d-flex gap-3'>
            <HomeCard 
                image={guarantee}
                title={"Best Price Guarantee"}
                subStitle={"A small river named Duren flows by their place and supplies"}
            />
            <HomeCard 
                image={heart}
                title={"Travellers Love Us"}
                subStitle={"A small river named Duren flows by their place and supplies"}
            />
            <HomeCard 
                image={agent}
                title={"Best Travel Agent"}
                subStitle={"A small river named Duren flows by their place and supplies"}
            />
            <HomeCard 
                image={support}
                title={"Our Dedicated Support"}
                subStitle={"A small river named Duren flows by their place and supplies"}
            />
        </Container>
        <Container className='my-5'>
            <h1 className='text-center'>Group Tour</h1>

            <div className='d-flex justify-content-center flex-wrap gap-4'>
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
    </main>
  )
}

export default Main