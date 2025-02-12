import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CourseCard = ({title, author, description, image} : {title: string, author: string, description: string, image: string}) => {
    return (
        <Card>
            <CardMedia
                image={image}
                sx={{ height: '180px' }}
            />
            <CardContent>
                <Typography variant='h5' color='textPrimary'>{ title.substring(0, 27) + "..." }</Typography>
                <Typography variant='body2' color='textPrimary'>{ description.substring(0, 80) + "..." }</Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' href='/course/author/name'>See course</Button>
            </CardActions>
        </Card>
    )
}

export default CourseCard
