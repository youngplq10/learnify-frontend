"use client"

import React from 'react'
import CourseCard from '../components/CourseCard'
import Breadcrumb from '../components/Breadcrumb';

const ExploreCoursesListing = () => {
    const examples = [
        {title: "Java Programming: From Beginner to Pro", description: "Learn Java from the ground up! This course covers core concepts, OOP, multithreading, database integration, and Spring Boot. Hands-on projects will equip you to build real-world Java applications."},
        {title: "C++ Mastery: From Basics to Advanced Development", description: "Master C++ programming from fundamentals to advanced topics like OOP, memory management, STL, and multithreading. Build real-world applications with hands-on projects and boost your software development skills!"},
        {title: "Python for Everyone: From Basics to AI & Data Science", description: "Master Python programming from scratch! Learn core concepts, OOP, file handling, web scraping, data analysis with Pandas, machine learning with Scikit-Learn, and AI fundamentals. Hands-on projects will prepare you for real-world applications!"},
        {title: "Full-Stack Web Development with JavaScript & React", description: "Become a full-stack developer with JavaScript! Learn front-end development with React, backend with Node.js & Express, and database integration with MongoDB & SQL. Hands-on projects will help you build dynamic web applications!"},
        {title: "Kotlin & Android App Development: From Beginner to Expert", description: "Learn Kotlin and Android development from scratch! Build modern Android apps using Jetpack Compose, MVVM architecture, Firebase, and REST APIs. Hands-on projects will prepare you for real-world mobile app development!"},
        {title: "Go Programming: Efficient & Scalable Backend Development", description: "Master Go programming for high-performance backend development! Learn concurrency, REST API development, database integration, and microservices architecture. Build scalable applications with hands-on projects!"},
        {title: "Cybersecurity & Ethical Hacking: From Zero to Hero", description: "Learn cybersecurity fundamentals, ethical hacking, penetration testing, network security, cryptography, and security best practices. Hands-on labs will equip you to secure systems and protect against cyber threats!"},
    ]

    const path = window.location.pathname;
    const pathArray = path.split("/").filter(Boolean);

    return (
        <div className='container-lg mt-5'>
            <div className="row mx-2">
                <Breadcrumb pathArray={pathArray} />
            </div>
            <div className="row mx-2">
                { examples.map((example, index) => {
                    return (
                        <div className='col-4 p-3 my-auto' key={index}>
                            <CourseCard title={example.title} description={example.description} author="example" image="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" />
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default ExploreCoursesListing
