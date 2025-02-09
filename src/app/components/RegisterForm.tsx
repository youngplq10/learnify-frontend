import { Alert, Button, Typography } from '@mui/material'
import Link from 'next/link';
import React, { useState } from 'react'
import { validateNewUser } from '../scripts/validation';
import { register } from '../scripts/apicalls';

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const [errorState, setErrorState] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {
        const validated = validateNewUser(username, email, password, repassword);
            
        if (validated === "Success") {
            setErrorState(true);
            const registerRes = await register(username, email, password);
            if (registerRes === true) {
                window.location.href = "/";
            } else {
                setErrorMessage("Failed to sign up. Try again.");
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
            <input type='text' className='form-control' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor='email' className='form-label'><Typography variant='body1' color='textPrimary'>E-mail</Typography></label>
            <input type='text' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor='password' className='form-label'><Typography variant='body1' color='textPrimary'>Password</Typography></label>
            <input type='password' className='form-control' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor='repassword' className='form-label'><Typography variant='body1' color='textPrimary'>Confirm password</Typography></label>
            <input type='password' className='form-control' id='repassword' value={repassword} onChange={(e) => setRepassword(e.target.value)} />

            <Button variant='contained' className='my-2' onClick={handleRegister}>Create account</Button>
            <Typography variant='body1' color='textPrimary'>You already have an account? <Link href="/sign-up">Log in</Link> now!</Typography>
            <Alert hidden={errorState} severity='error' className='mt-5'>
                { errorMessage }
            </Alert>
        </form>
    )
}

export default RegisterForm
