import React from 'react'
import Breadcrumbs from '../components/Breadcrumb'
import CourseDetails from '../components/CourseDetails'

const Course = () => {
    return (
        <div className='container-lg my-5'>
            <Breadcrumbs />
            <CourseDetails />
        </div>
    )
}

export default Course
