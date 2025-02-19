"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Breadcrumb from "../components/Breadcrumb";
import { course } from "../interfaces/interfaces";
import { getAllCourses } from "../scripts/apicalls";

const ExploreCoursesListing = () => {
    const [courses, setCourses] = useState<course[]>([]);
    const [pathArray, setPathArray] = useState<string[]>([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const courses = await getAllCourses();
            setCourses(courses);
        }
        fetchCourses()
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            const path = window.location.pathname;
            setPathArray(path.split("/").filter(Boolean));
        }
    }, [])

    

    return (
        <div className="container-lg mt-5">
            <div className="row mx-2">
                <Breadcrumb pathArray={pathArray} />
            </div>
            <div className="row mx-2">
                {courses.map((course, index) => (
                    <div className="col-4 p-3 my-auto" key={index}>
                        <CourseCard title={course.title} description={course.description} author={course.creator.username} image={course.bannerImageLink} owner={false} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCoursesListing;
