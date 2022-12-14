import React from 'react'
import { Card } from 'react-bootstrap'

function HomeCard({image, title, subStitle}) {
  return (
    <Card className='d-flex flex-column align-items-center justify-content-center p-3 text-center' style={{bacgkround: "white", marginTop: "-40px"}}>
      <img src={image} alt="" width="70px"/>
      <h1 className='fs-5 mt-4'>{title}</h1>
      <p className='fs-6'>{subStitle}</p>
    </Card>
  )
}

export default HomeCard