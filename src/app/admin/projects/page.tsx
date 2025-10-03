"use client"

import React from 'react';
import {Button} from "@components/ui/button";
import Link from "next/link";
import {PlusIcon} from "lucide-react";
import {useList} from "@refinedev/core";
import {Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle} from "@components/ui/card";
import DeleteActions from "@app/admin/projects/DeleteActions";
import {useRouter} from "next/navigation";

interface Project {
        id: string;
        title: string;
        description: string;
    projectType: string;
    projectStatus: string;
        date: string;
        location: string;
}

const Page = () => {
    const {result: {data}} = useList<Project>()
    const router = useRouter()

    return (
        <div className={"p-3"}>
            <div className={"flex w-full justify-end mb-6"}>
                <Button asChild className={"text-sm "}>
                    <Link href={"/admin/projects/create"}>
                        <PlusIcon />
                        Add Project
                    </Link>
                </Button>
            </div>

        {/* list of projects */}

           <div className={"flex flex-col gap-6"}>
               {
                   data?.map(item => {
                       return (
                           <Card key={item.id}>
                               <CardHeader>
                                   <CardTitle>{item.title}</CardTitle>
                               </CardHeader>
                               <CardContent>
                                   <p>{item.location}</p>
                                   <p>{item.projectType}</p>
                                   <p>{item.projectStatus}</p>
                                   <p>{item.date}</p>
                               </CardContent>
                               <CardFooter>
                                   <CardAction className={"space-x-3"}>
                                       <Button
                                           onClick={() => router.push(`/admin/projects/edit/${item.id}`)}
                                           className={"bg-primary hover:bg-primary/70 cursor-pointer"}>Update</Button>
                                       <DeleteActions data={item} />
                                   </CardAction>
                               </CardFooter>
                           </Card>
                       )
                   })
               }
           </div>


        </div>
    );
};

export default Page;