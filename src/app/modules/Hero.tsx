import React from 'react'
import { Button, Typography } from '@mui/material'

const Hero = () => {
    return (
        <div className='container-lg mt-5'>
            <div className="row justify-content-center pt-5 my-2">
                <div className="col-10 col-sm-8 col-md-6 text-center">
                    <Typography variant='h2' color='textPrimary' className='text-uppercase'>Unlock Your Potential, Share Your Knowledge</Typography>
                </div>
            </div>
            <div className="row justify-content-center my-2">
                <div className="col-10 col-sm-8 col-md-6 text-center">
                    <Typography variant='h4' color='textPrimary'>Learn from thousands of free courses or create and share your own with the world.</Typography>
                </div>
            </div>
            <div className='row justify-content-center my-3'>
            <div className='col-auto'>
                <Button variant='contained' href='/explore'>Explore Courses</Button>
            </div>
            <div className='col-auto'>
                <Button variant='outlined' href='/create'>Create Course</Button>
            </div>
        </div>
        </div>
    )
}

export default Hero
