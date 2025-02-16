import React from 'react'
import NewCourseForm from '../components/NewCourseForm'
import { Typography } from '@mui/material'

const CreateCourseSection = () => {
    return (
        <div className='container-lg'>
            <div className="row my-5 text-center mx-2">
                <Typography variant='h3' color='textPrimary'>Create course and share it to the world!</Typography>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <NewCourseForm />
                </div>
            </div>
        </div>
    )
}

export default CreateCourseSection
