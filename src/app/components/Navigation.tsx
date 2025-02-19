"use client";

import { Typography, Menu, MenuItem, IconButton } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getIsAuthenticated } from '@/app/scripts/server';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

const Navigation = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMobile = useMediaQuery("(max-width:768px)");

    useEffect(() => {
        const getAuth = async () => {
            const isAuthenticated = await getIsAuthenticated();
            setIsLogged(isAuthenticated);
            setLoading(false);
        };
        getAuth();
    }, []);

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="d-flex gap-3 align-items-center justify-content-end">
            {loading ? (
                <Typography variant="h4" color="textPrimary">LOADING</Typography>
            ) : isMobile ? (
                <>
                    <IconButton onClick={handleMenuOpen} color="secondary">
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>
                            <Link href="/explore" passHref className="text-decoration-none">
                                <Typography variant="h6" color="textPrimary">EXPLORE</Typography>
                            </Link>
                        </MenuItem>
                        {isLogged ? (
                            <>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link href="/auth/dashboard" passHref className="text-decoration-none">
                                        <Typography variant="h6" color="textPrimary">DASHBOARD</Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleMenuClose}>
                                    <Link href="/logout" passHref className="text-decoration-none">
                                        <Typography variant="h6" color="textPrimary">LOGOUT</Typography>
                                    </Link>
                                </MenuItem>
                            </>
                        ) : (
                            <MenuItem onClick={handleMenuClose}>
                                <Link href="/sign-up" passHref className="text-decoration-none">
                                    <Typography variant="h6" color="textPrimary">SIGN UP</Typography>
                                </Link>
                            </MenuItem>
                        )}
                    </Menu>
                </>
            ) : (
                <>
                    <Link href="/explore" passHref className="text-decoration-none">
                        <Typography variant="h4" color="textPrimary">EXPLORE</Typography>
                    </Link>
                    {isLogged ? (
                        <>
                            <Link href="/auth/dashboard" passHref className="text-decoration-none">
                                <Typography variant="h4" color="textPrimary">DASHBOARD</Typography>
                            </Link>
                            <Link href="/logout" passHref className="text-decoration-none">
                                <Typography variant="h4" color="textPrimary">LOGOUT</Typography>
                            </Link>
                        </>
                    ) : (
                        <Link href="/sign-up" passHref className="text-decoration-none">
                            <Typography variant="h4" color="textPrimary">SIGN UP</Typography>
                        </Link>
                    )}
                </>
            )}
        </div>
    );
};

export default Navigation;
