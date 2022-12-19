import React, { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailTour from './pages/DetailTour'
// import { dataTour } from './dataTour'

// Pages
import Home from './pages/Home'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import PrivateRoot from './components/PrivateRoot'
import PersonalInfo from './pages/PersonalInfo'
import IncomeTrip from './pages/IncomeTrip'
import AddTrip from './pages/AddTrip'
import PrivateAdmin from './components/PrivateAdmin'
import ListTransaction from './pages/ListTransaction'
import UserList from './pages/UserList'
import Test from './Test'
import TransactionList from './pages/TransactionList'

function RoutePage() {

    const [allUser, setAllUser] = useState([])
    const [userTransaction, setUserTransaction] = useState([])
    const [dataTrip, setDataTrip] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        fetchUser()
        fetchUserTransaction()
        fetchData()
    }, [])

    const fetchUser = async() => {
        const response = await fetch('https://63987d90044fa481d69f8389.mockapi.io/user')
        const data = await response.json()

        setAllUser(data)
    }

    const fetchUserTransaction = async() => {
        const response = await fetch(`https://63987d90044fa481d69f8389.mockapi.io/user/${user.id}/transaction`)
        const data = await response.json()

        setUserTransaction(data)
    }

    const fetchData = async() => {
        const response = await fetch('https://63987d90044fa481d69f8389.mockapi.io/dataTour')
        const data = await response.json()

        setDataTrip(data)
    }

   
    let [person, setPerson] = useState(1)
    let [totalPrice, setTotalPrice] = useState(0)
    let totalPrices = parseInt(totalPrice, 10)
    let [prices, setPrices] = useState(0)

    console.log(typeof totalPrices);

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

    console.log(allUser)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home data={dataTrip}/>} />
                <Route path="/detail/:id" element={<DetailTour 
                    dataTour={dataTrip}
                    person={person}
                    setPerson={setPerson}
                    totalPrices={totalPrices}
                    increment={increment}
                    decrement={decrement}
                    setPrices={setPrices}
                    setTotalPrice={setTotalPrice}
                    />} />

                <Route path="/test" element={<Test user={allUser}/>} />

                <Route element={<PrivateRoot user={user} />}>

                    <Route exact path="/payment/:id" element={<Payment 
                        totalPrice={totalPrices}
                        data={dataTrip}
                        person={person}
                        user={user}
                    />} />
                    <Route exact path="/payment-success" element={<PaymentSuccess 
                        totalPrice={totalPrices}
                        data={dataTrip}
                        person={person} 
                        userTrc={userTransaction}
                        user={user}
                    />} />
                    
                    <Route exact path="/personal-information" element={<PersonalInfo user={user} userTrc={userTransaction} />}/>
                    
                </Route>
                
                <Route element={<PrivateAdmin user={user}/>}>
                    <Route path='/income-trip' element={<IncomeTrip data={dataTrip} />} />
                    <Route path='/add-trip' element={<AddTrip />} />
                    <Route path='/transaction-list' element={<TransactionList user={allUser} userTrc={userTransaction}/>}/>
                    <Route path='/user-list' element={<UserList allUser={allUser} />}/>
                </Route>

                
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage