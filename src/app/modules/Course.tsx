"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CourseDetails from "../components/CourseDetails";

const Course = () => {
    const [pathArray, setPathArray] = useState<string[]>([]);

    useEffect(() => {
        const path = window.location.pathname;
        setPathArray(path.split("/").filter(Boolean));
    }, []);

    return (
        <div className="container-lg my-5">
            <Breadcrumb pathArray={pathArray} />
            <CourseDetails />
        </div>
    );
};

export default Course;
