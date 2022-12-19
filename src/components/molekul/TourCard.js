import React from 'react'

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';


function TourCard({
        id,
        image,
        title,
        price,
        capacity,
        country,
    }) {


    return (
    <div className='d-flex gap-3 justify-content-center mt-5 flex-wrap'>
        {/* {data.map(data => ( */}
            <Card key={id} className='p-2' style={{ width: '18rem', position: "relative" }}>
              <Card.Img variant="top" src={image} />
                <div className='py-1 px-2' style={{position: "absolute", top: 24, right: 0, fontSize: 14, background: "white", borderRadius: "8px" }}>{capacity}</div>
                <Card.Body>
                    <Link className='text-dark' to={`/detail/${id}`}>{title}</Link>
                    <div className='d-flex justify-content-between' style={{fontSize: 14}}>
                        <NumericFormat value={price} displayType={'text'} thousandSeparator="," prefix={'IDR. '} style={{color: "#FFAF00", fontSize:"16px", fontWeight: "700"}} />
                        <Card.Text>{country}</Card.Text>
                    </div>
                </Card.Body>
            </Card>   
        {/* ))} */}
    </div>
  )
}

export default TourCard