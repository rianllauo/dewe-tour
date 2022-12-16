import React, { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailTour from './pages/DetailTour'
import { dataTour } from './dataTour'

// Pages
import Home from './pages/Home'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import PrivateRoot from './components/PrivateRoot'
import PersonalInfo from './pages/PersonalInfo'
import IncomeTrip from './pages/IncomeTrip'
import AddTrip from './pages/AddTrip'
import PrivateAdmin from './components/PrivateAdmin'

function RoutePage() {

    // const [users, setUser] = useState()


    // useEffect(() => {
    //     fetchUser()
    // }, [])

    // const fetchUser = async() => {
    //     const response = await fetch('https://63987d90044fa481d69f8389.mockapi.io/user')
    //     const data = await response.json()

    //     setUser(data)
    // }

    const user = JSON.parse(localStorage.getItem('user'))
 
    const data = dataTour();

    let [person, setPerson] = useState(1)
    let [totalPrice, setTotalPrice] = useState(0)
    let [prices, setPrices] = useState(0)

    function increment(){
        setTotalPrice(totalPrice + prices)
        setPerson(person + 1)
    }

    function decrement(){
        if (person > 0 ){
            setTotalPrice(totalPrice - prices)
            setPerson(person - 1)
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/detail/:id" element={<DetailTour 
                    dataTour={data}
                    person={person}
                    setPerson={setPerson}
                    totalPrice={totalPrice}
                    increment={increment}
                    decrement={decrement}
                    setPrices={setPrices}
                    setTotalPrice={setTotalPrice}
                    />} />

                <Route element={<PrivateRoot user={user} />}>

                    <Route exact path="/payment/:id" element={<Payment 
                        totalPrice={totalPrice}
                        data={data}
                        person={person}
                    />} />
                    <Route exact path="/payment-success/:id" element={<PaymentSuccess 
                        totalPrice={totalPrice}
                        data={data}
                        person={person}
                    />} />
                    
                    <Route exact path="/personal-information" element={<PersonalInfo  />}/>
                    
                </Route>
                
                <Route element={<PrivateAdmin user={user}/>}>
                    <Route path='/income-trip' element={<IncomeTrip />} />
                    <Route path='/add-trip' element={<AddTrip />} />
                </Route>

                
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage