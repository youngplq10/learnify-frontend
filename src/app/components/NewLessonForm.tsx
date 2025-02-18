"use client"

import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { createCourse, createLesson, getCategories } from '../scripts/apicalls';
import { category } from '../interfaces/interfaces';
import { parseFromLinkToString } from '../scripts/scripts';

const NewLessonForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>();
    const [promotingVideo, setPromotingVideo] = useState<File | null>();
    const [pathArray, setPathArray] = useState<string[]>();

    useEffect(() => {
        const path = window.location.pathname;
        setPathArray(path.split("/").filter(Boolean));
    }, [])


    const handleSubmit = async () => {
        if (thumbnail && promotingVideo && pathArray) {
            const formData = new FormData();

            formData.append("thumbnail", thumbnail, thumbnail.name);
            formData.append("promotingVideo", promotingVideo, promotingVideo.name);
            formData.append("title", title);
            formData.append("description", description);

            createLesson(formData, parseFromLinkToString(decodeURIComponent(pathArray[3])));
        }
    }

    return (
        <form>
            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Title</Typography> </label>
            <input type='text' className='form-control' placeholder='e.g., Introduction to Python Programming' value={title} onChange={(e) => setTitle(e.target.value)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Description</Typography> </label>
            <textarea className='form-control' placeholder='A beginner-friendly course covering Python basics, syntax, and hands-on exercises.' rows={6} style={{ resize: 'none' }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Thumbnail</Typography> </label>
            <input type='file' accept='image/*' className='form-control' onChange={(e) => setThumbnail(e.target.files?.[0] || null)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Video</Typography> </label>
            <input type='file' accept='video/*' className='form-control' onChange={(e) => setPromotingVideo(e.target.files?.[0] || null)} />

            <Button variant='contained' className='my-2' onClick={handleSubmit}>Create lesson</Button>
        </form>
    )
}

export default NewLessonForm
