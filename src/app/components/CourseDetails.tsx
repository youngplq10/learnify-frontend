"use client";

import { Accordion, AccordionDetails, AccordionSummary, Button, Dialog, DialogTitle, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getCourse, getUserData, signUpForCourse } from '@/app/scripts/apicalls';
import { parseFromLinkToString } from '@/app/scripts/scripts';
import { course, user } from '@/app/interfaces/interfaces';
import { getIsAuthenticated } from '@/app/scripts/server';
import noimage from "@/app/assets/noimage.jpeg";

const CourseDetails = ({ title } : { title: string }) => {
    const [course, setCourse] = useState<course>();
    const [user, setUser] = useState<user | null>();
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [popWindow, setPopWindow] = useState(false);

    useEffect(() => {
        if (title!==undefined) { 
            const fetchCourse = async () => {
                const course = await getCourse(decodeURIComponent(parseFromLinkToString(title)));
                const isAuth = await getIsAuthenticated();
                if (isAuth) { 
                    const user = await getUserData(); 
                    if (user!==null){
                        setUser(user);
                    }
                }
                setCourse(course);
                setIsLogged(isAuth);
                setLoading(false);
            }
            fetchCourse();
        }
    }, [title]);

    const handleSignUpForCourse = () => {
        if (isLogged) {
            signUpForCourse(course?.title || "");
        } else {
            setPopWindow(true);
        }
    }

    const handleHidePopWindow = () => {
        setPopWindow(false);
    }

    const isParticipating = user?.learningCourses.some(c => c.id.timestamp === course?.id.timestamp);

    if (loading) return <p>loading</p>;

    return (
        <>
            <div className="row my-5">
                <div className="col-12 col-md-6 p-3 position-relative" style={{ height: "350px" }}>
                    { process.env.NEXT_PUBLIC_API ? (
                        <Image
                            src={process.env.NEXT_PUBLIC_API + course?.bannerImageLink}
                            fill
                            alt='course thumbnail'
                            unoptimized
                        />
                    ) : (
                        <Image
                            src={noimage}
                            fill
                            alt='course thumbnail'
                            unoptimized
                        />
                    ) }
                </div>
                <div className="col-12 col-md-6 p-5 my-auto">
                    <Typography variant='h4' color='textPrimary'>{ course?.title }</Typography>
                    <Typography variant='body2' color='textPrimary'>{ course?.description }</Typography>

                    { !isParticipating ? (
                        <Button variant='contained' className='mt-3' onClick={handleSignUpForCourse}>Sign up for the course</Button>
                    ) : (
                        <Button variant='contained' className='mt-3' onClick={handleSignUpForCourse}>Leave the course</Button>
                    ) }
                </div>
            </div>

            <div className="row my-5">
                <div className="col-12 col-md-6">
                    { course?.lessons.map((lesson, index) => {
                        return (
                            <Accordion className='border' key={index}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}>
                                    <Typography variant='body1' color='textPrimary'>{ lesson.title }</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body2' color='textPrimary'>
                                        { lesson.description }
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    }) }
                </div>
            </div>

            <Dialog open={popWindow} onClose={handleHidePopWindow}>
                <DialogTitle sx={{ padding: 5 }}>You need to be logged in to sign up for the course!</DialogTitle>
                <Button variant='contained' className='mt-3' href='/sign-up' sx={{ margin: 5 }}>Sign up</Button>
            </Dialog>
        </>
    )
}

export default CourseDetails;
