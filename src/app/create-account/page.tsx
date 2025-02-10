"use client"

import React, { useEffect, useState } from 'react'
import { getIsAuthenticated } from '@/app/scripts/server';
import Register from '../modules/Register';
import RegisterForm from '../components/RegisterForm';
import Navbar from '../modules/Navbar';

const page = () => {
    return (
        <>
            <Navbar />
            <Register />
        </>
    )
}

export default page
