"use client"

import React from 'react';
import AddProject from "@components/addProject";
import {useParams} from "next/navigation";
import {useCustom} from "@refinedev/core";
import {UpdateProjectInput} from "@validation/schema";
import { Loader2 } from 'lucide-react';


const Page = () => {
    const {id} = useParams()

    const {query: {data, isLoading}} = useCustom<UpdateProjectInput>({
        url: `/api/project/${id}`,
        method: "get"
    })

    console.log(data)

    if(isLoading) {
        return <span className="h-screen w-full flex justify-center items-enter p-40"><Loader2 className='animate-spin'/></span>;
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