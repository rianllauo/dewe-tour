import React from 'react'
import { Button, Container } from 'react-bootstrap'

function SearchBar() {
  return (
    <div className='w-100 mt-4'>
            <h3 className='fs-6'>Find greate place to holiday</h3>
            <form className='d-flex'>
                <input className='w-100 py-2 px-3' type="text" style={{border:"none", borderRadius: "4px"}}/>
                <Button className='py-1 px-4' style={{background: "#FFAF00", border: "none"}}>Search</Button> 
            </form>
    </div>
  )
}

export default SearchBar