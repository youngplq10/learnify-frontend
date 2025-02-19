"use client";

import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { createCourse, getCategories } from '@/app/scripts/apicalls';
import { category } from '@/app/interfaces/interfaces';

const NewCourseForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>();
    const [promotingVideo, setPromotingVideo] = useState<File | null>();
    const [category, setCategory] = useState("C++");

    const [categories, setCategories] = useState<category[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            setCategories(categories);
            setLoading(false);
        }
        fetchCategories();
    }, []);

    const handleSubmit = () => {
        if (thumbnail && promotingVideo) {
            const formData = new FormData();

            formData.append("categoryName", category);
            formData.append("thumbnail", thumbnail, thumbnail.name);
            formData.append("promotingVideo", promotingVideo, promotingVideo.name);
            formData.append("title", title);
            formData.append("description", description);

            createCourse(formData);

            window.location.href = "/auth/dashboard";
        }
    }

    if (loading) return <p>loading</p>;

    return (
        <form>
            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Title</Typography> </label>
            <input type='text' className='form-control' placeholder='e.g., Introduction to Python Programming' value={title} onChange={(e) => setTitle(e.target.value)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Description</Typography> </label>
            <textarea className='form-control' placeholder='A beginner-friendly course covering Python basics, syntax, and hands-on exercises.' rows={6} style={{ resize: 'none' }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Thumbnail</Typography> </label>
            <input type='file' accept='image/*' className='form-control' onChange={(e) => setThumbnail(e.target.files?.[0] || null)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Promoting video</Typography> </label>
            <input type='file' accept='video/*' className='form-control' onChange={(e) => setPromotingVideo(e.target.files?.[0] || null)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Category</Typography> </label>
            <select className='form-control' value={category} onChange={(e) => setCategory(e.target.value)}>
                { categories?.map((category, index) => {
                    return (
                        <option value={category.name} key={index}>{ category.name }</option>
                    )
                }) }
            </select>

            <Button variant='contained' className='my-2' onClick={handleSubmit}>Create course</Button>
        </form>
    );
}

export default NewCourseForm;
