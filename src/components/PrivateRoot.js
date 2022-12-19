import React from 'react'
import { Navigate, Outlet } from 'react-router'

function PrivateRoot({user}) {

  return (
    <div>
        {
            user != null ? <Outlet/> : <Navigate to="/"/>
        }
    </div>
  )
}

export default PrivateRoot