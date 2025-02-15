import React from 'react'
import NewCourseForm from '../components/NewCourseForm'

const CreateCourseSection = () => {
    return (
        <div className='container-lg'>
            <div className="row mt-5 pt-5">
                <div className="col-4">
                    <NewCourseForm />
                </div>
            </div>
        </div>
    )
}

export default CreateCourseSection
