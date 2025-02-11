"use client"

import { Button, Typography } from '@mui/material'
import React from 'react'
import { logout } from '../scripts/server'

const LogoutUI = () => {
    const handleLogout = () => {
        logout()
    }

    return (
        <div className="container-lg">
            <div className='row justify-content-center mt-5 pt-5'>
                <div className="col-auto text-center">
                    <Typography variant='h4' color='textPrimary'>Are you sure you want to log out?</Typography>
                    <Button variant='contained' onClick={handleLogout} className='my-3'>Logout</Button>
                </div>
            </div>
        </div>
    )
}

export default LogoutUI
