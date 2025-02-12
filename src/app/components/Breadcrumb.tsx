"use client"

import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

const Breadcrumb = ({ pathArray } : { pathArray: string[] }) => {
    const thisPath = window.location.pathname;
    const thisPathArray = thisPath.split("/").filter(Boolean);

    console.log(pathArray[0])

    if (pathArray[0] === "course") {
        return (
            <Breadcrumbs sx={{ color: "text.primary" }}>
                <Link color='textPrimary' underline='hover' href="/explore">Courses</Link>
                <Link color='textPrimary' underline='hover' href={"/profile/" + pathArray[1]}>{pathArray[1].charAt(0).toUpperCase() + pathArray[1].slice(1)}</Link>
                <Link color='textPrimary' underline='hover' href={thisPath}>{thisPathArray[2].charAt(0).toUpperCase() + thisPathArray[2].slice(1) }</Link>
            </Breadcrumbs>
        )
    } else if (pathArray[0] === "explore") {
        return(
            <Breadcrumbs sx={{ color: "text.primary" }}>
                <Link color='textPrimary' underline='hover' href="/">Homepage</Link>
                <Link color='textPrimary' underline='hover' href="/explore">Explore</Link>
            </Breadcrumbs>
        )
    } else if (pathArray === null) {
        return (
            <Link color='textPrimary' underline='hover' href="/">Homepage</Link>
        )
    }
}

export default Breadcrumb
