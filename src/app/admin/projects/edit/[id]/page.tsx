"use client"

import React from 'react';
import AddProject from "@components/addProject";
import {useParams} from "next/navigation";
import {useCustom} from "@refinedev/core";
import {UpdateProjectInput} from "@validation/schema";


const Page = () => {
    const {id} = useParams()

    const {query: {data, isLoading}} = useCustom<UpdateProjectInput>({
        url: `/api/project/${id}`,
        method: "get"
    })

    console.log(data)

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(!data){
        return <div>error</div>
    }


    return (
        <div className={"m-auto mt-3 px-4"}>
            <div className={"max-w-3xl mx-auto"}>
                <AddProject data={data.data} />
            </div>
        </div>
    );
};

export default Page;