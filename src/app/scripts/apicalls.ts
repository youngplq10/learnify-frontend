"use server"

import axios from "axios"
import { getAllCookies, setAuthToken } from "./server";
import { course } from "../interfaces/interfaces";

export const login = async (username: string, password: string) : Promise<Boolean> => {
    try {
        const res = await axios.post(process.env.NEXT_PRIVATE_API + "/api/public/login", {
            username: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.data === "Failed") {
            return false;
        } else {
            setAuthToken(res.data)
            return true;
        }
    } catch (error){
        return false
    }
}

export const register = async (username: string, email: string, password: string) : Promise<Boolean> => {
    try {
        const res = await axios.post(process.env.NEXT_PRIVATE_API + "/api/public/register", {
            username: username,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setAuthToken(res.data);
        return true;
    } catch {
        return false;
    }
}

export const getAllCourses = async () : Promise<course[]> => {
    try {
        const res = await axios.get(process.env.NEXT_PRIVATE_API + "/api/public/courses", {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return res.data as course[]
    } catch {
        return []
    }
}

export const getCourse = async (title: string) : Promise<course> => {
    try {
        const res = await axios.get(process.env.NEXT_PRIVATE_API + "/api/public/course/" + title, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return res.data as course
    } catch{
        throw new Error("Failed to fetch course");
    }
} 

export const signUpForCourse = async (title: string): Promise<boolean> => {
    const formData = new FormData();

    try {
        const { username, jwt } = await getAllCookies();
        
        formData.append("username", username?.value || "");
        formData.append("courseTitle", title)

        const res = await axios.post(
            process.env.NEXT_PRIVATE_API + "/api/auth/sign-up-for-course", formData,
            {
                headers: {
                    'Authorization': 'Bearer ' + jwt?.value,
                }
            }
        );

        console.log(res);
        return true;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to sign up for course");
    }
};
