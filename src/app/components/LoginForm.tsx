"use client";

import { Alert, Button, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { validateExistingUser } from '@/app/scripts/validation';
import { login } from '@/app/scripts/apicalls';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorState, setErrorState] = useState(true);

    const handleLogin = async () => {
        const validated = validateExistingUser(username, password);
        
        if (validated === "Success") {
            setErrorState(true);
            const loggingRes = await login(username, password);
            if (loggingRes === true) {
                window.location.href = "/";
            } else {
                setErrorMessage("Failed to log in. Try again.");
                setErrorState(false);
            }
        } else {
            setErrorMessage(validated);
            setErrorState(false);
        }
    }

    return (
        <form>
            <label htmlFor='username' className='form-label'><Typography variant='body1' color='textPrimary'>Username</Typography></label>
            <input type='text' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} id='username' />
            <label htmlFor='password' className='form-label'><Typography variant='body1' color='textPrimary'>Password</Typography></label>
            <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} id='password' />
            <Button variant='contained' className='my-2' onClick={handleLogin}>Log in</Button>
            <Typography variant='body1' color='textPrimary'>You don &apos t have an account? <Link href="/create-account">Create one</Link> now!</Typography>
            <Alert hidden={errorState} severity='error' className='mt-5'>
                { errorMessage }
            </Alert>
        </form>
    );
}

export default LoginForm;
