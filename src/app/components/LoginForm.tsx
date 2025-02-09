import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
    return (
        <form>
            <label htmlFor='username' className='form-label'><Typography variant='body1' color='textPrimary'>Username</Typography></label>
            <input type='text' className='form-control' />
            <label htmlFor='password' className='form-label'><Typography variant='body1' color='textPrimary'>Password</Typography></label>
            <input type='password' className='form-control' />
            <Button variant='contained' className='my-2'>Login</Button>
            <Typography variant='body1' color='textPrimary'>You don't have an account? <Link href="/create-account">Create one</Link> now!</Typography>
        </form>
    )
}

export default LoginForm
