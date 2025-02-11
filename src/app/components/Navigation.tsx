"use client"

import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getIsAuthenticated, logout } from '../scripts/server'

const Navigation = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAuth = async () => {
            const isAuthenticated = await getIsAuthenticated();
            setIsLogged(isAuthenticated);
            setLoading(false);
        }
        getAuth();
    }, [])

    return (
        <div className='d-flex gap-3 align-items-center justify-content-end'>
            { loading ? (
                <Typography variant="h4" color="textPrimary">LOADING</Typography>
            ) : (
                isLogged ? (
                    <>
                        <Link href="/explore" passHref className='text-decoration-none'>
                            <Typography variant="h4" color="textPrimary">EXPLORE</Typography>
                        </Link>
                        <Link href="/auth/dashboard" passHref className='text-decoration-none'>
                            <Typography variant="h4" color="textPrimary">DASHBOARD</Typography>
                        </Link>
                        <Link href="/logout" passHref className='text-decoration-none'>
                            <Typography variant="h4" color="textPrimary">LOGOUT</Typography>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/explore" passHref className='text-decoration-none'>
                            <Typography variant="h4" color="textPrimary">EXPLORE</Typography>
                        </Link>
                        <Link href="/sign-up" passHref className='text-decoration-none'>
                            <Typography variant="h4" color="textPrimary">SIGN UP</Typography>
                        </Link>
                    </>
                )
            ) }
        </div>
    )
}

export default Navigation
