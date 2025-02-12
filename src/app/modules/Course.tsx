"use client"

import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CourseDetails from '../components/CourseDetails'

const Course = () => {
    const path = window.location.pathname;
    const pathArray = path.split("/").filter(Boolean);

    return (
        <div className='container-lg my-5'>
            <Breadcrumb pathArray={pathArray} />
            <CourseDetails />
        </div>
    )
}

export default Course
