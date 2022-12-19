import React from 'react'

// components
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

function Home({data}) {

    return (
        <>
            <Header />
            <Main data={data}/>
            <Footer/>
        </>
    )
}

export default Home