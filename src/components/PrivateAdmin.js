import React from 'react'
import { Navigate, Outlet } from 'react-router'

function PrivateAdmin({user}) {
  return (
    <div>
        {
            user != null && user.admin === true ? <Outlet/> : <Navigate to="/"/>
        }
    </div>
  )
}

export default PrivateAdmin