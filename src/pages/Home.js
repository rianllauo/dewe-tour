import React from 'react'

// components
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home() {

    const data = localStorage.getItem('name')
    console.log(data)

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home