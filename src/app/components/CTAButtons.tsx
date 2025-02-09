import { Button } from '@mui/material'
import React from 'react'

const CTAButtons = () => {
    return (
        <div className='row justify-content-center my-3'>
            <div className='col-auto'>
                <Button variant='contained' href='/explore'>Explore Courses</Button>
            </div>
            <div className='col-auto'>
                <Button variant='outlined' href='/create'>Create Course</Button>
            </div>
        </div>
    )
}

export default CTAButtons
