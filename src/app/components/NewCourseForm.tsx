"use client"

import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const NewCourseForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [promotingVideo, setPromotingVideo] = useState<File | null>(null);
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        console.log(title)
        console.log(description)
        console.log(thumbnail)
        console.log(promotingVideo)
        console.log(category)
    }

    return (
        <form>
            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Title</Typography> </label>
            <input type='text' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Description</Typography> </label>
            <textarea className='form-control' rows={6} style={{ resize: 'none' }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Thumbnail</Typography> </label>
            <input type='file' className='form-control' onChange={(e) => setThumbnail(e.target.files?.[0] || null)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Promoting video</Typography> </label>
            <input type='file' className='form-control' onChange={(e) => setPromotingVideo(e.target.files?.[0] || null)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Category</Typography> </label>
            <select className='form-control' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Full Stack">Full stack</option>
                <option value="Java">Java</option>
                <option value="C++">C++</option>
            </select>

            <Button variant='contained' className='my-2' onClick={handleSubmit}>Create course</Button>
        </form>
    )
}

export default NewCourseForm
