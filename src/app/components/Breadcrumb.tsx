"use client"

import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

const Breadcrumb = () => {
    return (
        <Breadcrumbs sx={{ color: "text.primary" }}>
            <Link color='textPrimary' underline='hover' href="/">Homepage</Link>
            <Link color='textPrimary' underline='hover' href="/explore">Explore</Link>
            <Link color='textPrimary' underline='hover' href="/author">Author</Link>
            <Link color='textPrimary' underline='hover' href="/author/name">Name</Link>
        </Breadcrumbs>
    )
}

export default Breadcrumb
