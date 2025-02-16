"use client"

import React, { useEffect, useState } from 'react'
import EditCourseForm from '../components/EditCourseForm';
import { parseFromLinkToString } from '../scripts/scripts';
import { getCourse } from '../scripts/apicalls';
import { course } from '../interfaces/interfaces';
import { Typography } from '@mui/material';

const EditCourseSection = () => {
    const [pathArray, setPathArray] = useState<string[]>([]);
    const [course, setCourse] = useState<course>();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const path = window.location.pathname;
        setPathArray(path.split("/").filter(Boolean));

        const fetchCourse = async () => {
            const course = await getCourse(parseFromLinkToString(decodeURIComponent(pathArray[3])))
            setCourse(course);
            setLoading(false);
            console.log(course)
        }
        fetchCourse()
    }, [pathArray[3]]);

    if (loading || course?.category===undefined) return <p>loading</p>
    

    return (
        <div className='container-lg my-5'>
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 col-xl-5 mx-3">
                    <Typography variant='h2' color='textPrimary'>Edit course details</Typography>
                    <EditCourseForm title={decodeURIComponent(parseFromLinkToString(course?.title || ""))} description={course?.description || ""} category={course?.category.name || ""} />
                </div>
                <div className="col-10 col-md-8 col-xl-5 mx-3">
                    <Typography variant='h2' color='textPrimary'>Create new lesson</Typography>
                    
                </div>
            </div>
        </div>
    )
}

export default EditCourseSection
