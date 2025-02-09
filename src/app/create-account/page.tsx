"use client"

import React, { useEffect, useState } from 'react'
import { getIsAuthenticated } from '@/app/scripts/server';
import Register from '../modules/Register';
import RegisterForm from '../components/RegisterForm';
import Navbar from '../modules/Navbar';

const page = () => {
    const [isLogged, setIsLogged] = useState(false);
        
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authStatus = await getIsAuthenticated();
                setIsLogged(authStatus);
            } catch (error) {
                setIsLogged(false);
            }
        };
        checkAuth();
    }, []);
    
    if (isLogged) window.location.href = "/"

    return (
        <>
            <Navbar />
            <Register />
        </>
    )
}

export default page
