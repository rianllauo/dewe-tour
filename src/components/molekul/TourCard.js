import React from 'react'

import {dataTour} from '../../dataTour'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';


function TourCard() {

    const data = dataTour();

    return (
    <div className='d-flex gap-3 justify-content-center mt-5 flex-wrap'>
        {data.map(data => (
            <Card className='p-2' style={{ width: '18rem', position: "relative" }}>
                <Card.Img variant="top" src={require(`../../images/data-image/${data.image}`)} />
                <div className='py-1 px-2' style={{position: "absolute", top: 24, right: 0, fontSize: 14, background: "white", borderRadius: "8px" }}>{data.capacity}</div>
                <Card.Body>
                    <Link className='text-dark' to={`/detail/${data.id}`}>{data.title}</Link>
                    <div className='d-flex justify-content-between' style={{fontSize: 14}}>
                        <NumericFormat value={data.price} displayType={'text'} thousandSeparator="," prefix={'IDR. '} style={{color: "#FFAF00", fontSize:"16px", fontWeight: "700"}} />
                        <Card.Text>{data.country}</Card.Text>
                    </div>
                </Card.Body>
            </Card>   
        ))}
    </div>
  )
}

export default TourCard