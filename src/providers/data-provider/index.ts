"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";
import axios from "axios";

export const ApiClient = axios.create({
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
})

const API_URL = "http://localhost:3000/api";

export const dataProvider = dataProviderSimpleRest(API_URL);
