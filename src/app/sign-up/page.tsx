"use client"

import React, { useEffect, useState } from 'react'
import Login from '@/app/modules/Login'
import Navbar from '@/app/modules/Navbar'
import { getIsAuthenticated } from '@/app/scripts/server'

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
        <div>
            <Navbar />
            <Login />
        </div>
    )
}

export default page
