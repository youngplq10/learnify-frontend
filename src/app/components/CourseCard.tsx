"use client"

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { parseToLink } from '../scripts/scripts'
import { getUserData } from '../scripts/apicalls'

const CourseCard = ({title, author, description, image} : {title: string, author: string, description: string, image: string}) => {
    const [username, setUsername] = useState<string | undefined>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = await getUserData();
            setUsername(user?.username);
            setLoading(false);
        }
        fetchUserData()
    }, [])

    if (loading) return <p>loading</p>

    return (
        <Card>
            <CardMedia
                image={"http://localhost:8080" + image}
                sx={{ height: '180px' }}
            />
            <CardContent>
                <Typography variant='h5' color='textPrimary'>{ title.substring(0, 27) + "..." }</Typography>
                <Typography variant='body2' color='textPrimary'>{ description.substring(0, 80) + "..." }</Typography>
            </CardContent>
            <CardActions>
                { username===author ? (
                    <Button variant='contained' href={`/auth/course/edit/${encodeURIComponent(parseToLink(title))}`}>Edit course</Button>
                ) : (
                    <Button variant='contained' href={`/course/${author}/${encodeURIComponent(parseToLink(title))}`}>See course</Button>
                ) }
            </CardActions>
        </Card>
    )
}

export default CourseCard
