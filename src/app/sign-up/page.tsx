"use client"

import React, { useEffect, useState } from 'react'
import Login from '@/app/modules/Login'
import Navbar from '@/app/modules/Navbar'
import { getIsAuthenticated } from '@/app/scripts/server'

const page = () => {
    return (
        <div>
            <Navbar />
            <Login />
        </div>
    )
}

export default page
