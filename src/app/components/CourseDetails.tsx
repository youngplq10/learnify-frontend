"use client"

import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getCourse } from '../scripts/apicalls';
import { parseFromLinkToString } from '../scripts/scripts';
import { course } from '../interfaces/interfaces';

const CourseDetails = ({ title } : { title: string }) => {
    const [course, setCourse] = useState<course>();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (title!==undefined) { 
            const fetchCourse = async () => {
                const course = await getCourse(decodeURIComponent(parseFromLinkToString(title)));
                setCourse(course);
                setLoading(false)
            }
            fetchCourse();
        }
    }, [title])

    if (loading) return <p>loading</p>

    return (
        <>
            <div className="row my-5">
                <div className="col-6 p-3 position-relative" style={{ height: "350px" }}>
                    <Image
                        src={"http://localhost:8080" + course?.bannerImageLink}
                        fill
                        alt='course thumbnail'
                        unoptimized
                        />
                </div>
                <div className="col-6 p-5 my-auto">
                    <Typography variant='h4' color='textPrimary'>{ course?.title }</Typography>
                    <Typography variant='body2' color='textPrimary'>{ course?.description }</Typography>
                    <Button variant='contained' className='mt-3'>Sign up for the course</Button>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-6">
                    <Accordion className='border'>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}>
                            <Typography variant='body1' color='textPrimary'>Title of lesson no 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='body2' color='textPrimary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default CourseDetails
