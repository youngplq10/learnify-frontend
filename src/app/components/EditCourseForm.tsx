import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getCategories } from '@/app/scripts/apicalls';
import { category } from "@/app/interfaces/interfaces";

const EditCourseForm = ({title, description, category} : {title: string, description: string, category: string}) => {
    
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newCategory, setNewCategory] = useState(category);
    
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
        console.log(newTitle, newDescription, newCategory);
    }

    if (loading) return <p>loading</p>;

    return (
        <form>
            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Title</Typography> </label>
            <input type='text' className='form-control' placeholder='e.g., Introduction to Python Programming' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Description</Typography> </label>
            <textarea className='form-control' placeholder='A beginner-friendly course covering Python basics, syntax, and hands-on exercises.' rows={6} style={{ resize: 'none' }} value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></textarea>

            <label className='form-label'> <Typography variant='h6' color='textPrimary'>Category</Typography> </label>
            <select className='form-control' value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                { categories?.map((category, index) => {
                    return (
                        <option value={category.name} key={index}>{ category.name }</option>
                    )
                }) }
            </select>

            <Button variant='contained' className='my-2' onClick={handleSubmit}>Submit changes</Button>
        </form>
    );
}

export default EditCourseForm;
