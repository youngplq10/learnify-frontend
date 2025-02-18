"use client"

import React, { useEffect, useState } from 'react'
import { course, user } from '../interfaces/interfaces'
import { getUserData } from '../scripts/apicalls';
import { Button, Typography } from '@mui/material';
import CourseCard from '../components/CourseCard';

const Dashboard = () => {
    const [creatingCourses, setCreatingCourses] = useState<course[]>([]);
    const [learningCourses, setLearningCourses] = useState<course[]>([]);
    const [user, setUser] = useState<user | null>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserData();
            setUser(user);
            setLoading(false);
        }
        fetchUser();
    }, [])

    if (loading) return <p>loading</p>

    console.log(user)

    return (
        <div className='container-lg mt-5'>
            <div className="row my-2">
                <div className="col-auto">
                    <Button variant='contained' href='/auth/create'>Create</Button>
                </div>
                <div className="col-auto">
                    <Button variant='contained' href='/explore'>Explore</Button>
                </div>
            </div>
            <div className="row my-4">
                <Typography variant='h5' color='textPrimary'>Courses you are participating in: </Typography>
            </div>
            <div className="row">
                { user?.learningCourses.map((course, index) => {
                    return (
                        <div className="col-10 col-md-6 col-lg-4" key={index}>
                            <CourseCard title={course.title} description={course.description} author={course.creator} image={course.bannerImageLink} owner={false} />
                        </div>
                    )
                }) }
            </div>

            <div className="row my-4">
                <Typography variant='h5' color='textPrimary'>Courses you are creating: </Typography>
            </div>
            <div className="row">
                { user?.creatingCourses.map((course, index) => {
                    return (
                        <div className="col-10 col-md-6 col-lg-4" key={index}>
                            <CourseCard title={course.title} description={course.description} author={user.username} image={course.bannerImageLink} owner={true} />
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default Dashboard
