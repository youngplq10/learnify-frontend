import { Typography } from '@mui/material'
import React from 'react'

const Headlines = () => {
    return (
        <>
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
        </>
    )
}

export default Headlines
