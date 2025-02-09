import React from 'react'
import Navbar from './Navbar'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
    return (
        <div className='container-lg mt-5 pt-5'>
            <div className="row justify-content-center">
                <div className="col-6">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default Register
