import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from './Navbar'

const Login = () => {
    return (
        <div className='container-lg mt-5 pt-5'>
            <div className="row justify-content-center">
                <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login
