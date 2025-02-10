"use client"

import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const CourseDetails = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-6 p-3 position-relative" style={{ height: "350px" }}>
                    <Image
                        src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                        fill
                        alt='course thumbnail'
                        unoptimized
                        />
                </div>
                <div className="col-6 p-5 my-auto">
                    <Typography variant='h4' color='textPrimary'>Java Programming: From Beginner to Pro</Typography>
                    <Typography variant='body2' color='textPrimary'>Learn Java from the ground up! This course covers core concepts, OOP, multithreading, database integration, and Spring Boot. Hands-on projects will equip you to build real-world Java applications.</Typography>
                    <Button variant='contained' className='mt-3'>Sign up for the course</Button>
                </div>
            </div>
        </>
    )
}

export default CourseDetails
