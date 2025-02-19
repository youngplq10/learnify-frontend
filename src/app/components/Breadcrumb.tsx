"use client";

import { Breadcrumbs, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import { parseFromLinkToString } from "@/app/scripts/scripts";

const Breadcrumb = ({ pathArray }: { pathArray: string[] }) => {
    const [thisPathArray, setThisPathArray] = useState<string[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const thisPath = window.location.pathname;
            setThisPathArray(thisPath.split("/").filter(Boolean));
        }
    }, []);

    if (pathArray.length === 0) {
        return <Link color="textPrimary" underline="hover" href="/">Homepage</Link>;
    }

    if (pathArray[0] === "course") {
        return (
            <Breadcrumbs sx={{ color: "text.primary" }}>
                <Link color="textPrimary" underline="hover" href="/explore">Courses</Link>
                <Link color="textPrimary" underline="hover" href={`/profile/${pathArray[1]}`}>
                    {pathArray[1]?.charAt(0).toUpperCase() + pathArray[1]?.slice(1)}
                </Link>
                <Link color="textPrimary" underline="hover" href={window.location.pathname}>
                    {thisPathArray[2] ? decodeURIComponent(parseFromLinkToString(thisPathArray[2].charAt(0).toUpperCase())) + decodeURIComponent(parseFromLinkToString(thisPathArray[2].slice(1))) : ""}
                </Link>
            </Breadcrumbs>
        );
    } else if (pathArray[0] === "explore") {
        return (
            <Breadcrumbs sx={{ color: "text.primary" }}>
                <Link color="textPrimary" underline="hover" href="/">Homepage</Link>
                <Link color="textPrimary" underline="hover" href="/explore">Explore</Link>
            </Breadcrumbs>
        );
    }

    return <Link color="textPrimary" underline="hover" href="/">Homepage</Link>;
};

export default Breadcrumb;
