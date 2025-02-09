"use server"

import axios from "axios"
import { setAuthToken } from "./server";

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