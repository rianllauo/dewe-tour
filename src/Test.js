import React, { useState } from 'react'

function Test({user}) {


    const [prices, setPrices] = useState({
        price: 0,
    })

    console.log(prices)
    function handleChange(e){
        setPrices(
            {       
                ...prices,         
                price: e.target.value
            }
        )
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = prices

        await fetch('https://63987d90044fa481d69f8389.mockapi.io/user/1/transaction',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            } 
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Test