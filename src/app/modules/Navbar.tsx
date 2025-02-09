import React from 'react'
import Logo from '@/app/components/Logo'
import Navigation from '@/app/components/Navigation'

const Navbar = () => {
    return (
        <div className='container-lg my-4'>
            <div className="row mx-2">
                <div className="col-2">
                    <Logo />
                </div>
                <div className="col-10">
                    <Navigation />
                </div>
            </div>
        </div>
    )
}

export default Navbar
