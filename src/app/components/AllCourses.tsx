import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const AllCourses = () => {
    const examples = [
        {title: "Java Programming: From Beginner to Pro", description: "Learn Java from the ground up! This course covers core concepts, OOP, multithreading, database integration, and Spring Boot. Hands-on projects will equip you to build real-world Java applications."},
        {title: "C++ Mastery: From Basics to Advanced Development", description: "Master C++ programming from fundamentals to advanced topics like OOP, memory management, STL, and multithreading. Build real-world applications with hands-on projects and boost your software development skills!"}
    ]

    return (
        <div className='row'>
            { examples.map((course, index) => (
                <div className='border col-3 m-1' key={index}>
                    <Card>
                        <CardMedia
                            image="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                            sx={{ height: '140px' }}
                        />
                        <CardContent>
                            <Typography variant='h5' color='textPrimary'>{ course.title.substring(0, 20) }</Typography>
                            <Typography variant='body2' color='textPrimary'>{ course.description.substring(0, 80) + "..." }</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'>See course</Button>
                        </CardActions>
                    </Card>
                </div>
            )) }
        </div>
    )
}

export default AllCourses
