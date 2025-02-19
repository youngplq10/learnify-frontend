"use client";

import React, { useEffect, useState } from 'react';
import EditCourseForm from '@/app/components/EditCourseForm';
import { parseFromLinkToString } from '@/app/scripts/scripts';
import { getCourse } from '@/app/scripts/apicalls';
import { course } from '@/app/interfaces/interfaces';
import { Typography } from '@mui/material';
import NewLessonForm from '@/app/components/NewLessonForm';

const EditCourseSection = () => {
    const [pathArray, setPathArray] = useState<string[]>([]);
    const [course, setCourse] = useState<course>();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const path = window.location.pathname;
        setPathArray(path.split("/").filter(Boolean));

        const fetchCourse = async () => {
            const course = await getCourse(parseFromLinkToString(decodeURIComponent(pathArray[3])));
            setCourse(course);
            setLoading(false);
        }
        fetchCourse();
    }, []);

    if (loading || course?.category===undefined) return <p>loading</p>;
    

    return (
        <div className='container-lg my-5'>
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 col-xl-5 mx-3">
                    <Typography variant='h2' color='textPrimary' className='my-3'>Edit course details</Typography>
                    <EditCourseForm title={decodeURIComponent(parseFromLinkToString(course?.title || ""))} description={course?.description || ""} category={course?.category.name || ""} />
                </div>
                <div className="col-10 col-md-8 col-xl-5 mx-3">
                    <Typography variant='h2' color='textPrimary' className='my-3'>Create new lesson</Typography>
                    <NewLessonForm />
                </div>
            </div>
        </div>
    );
}

export default EditCourseSection;
