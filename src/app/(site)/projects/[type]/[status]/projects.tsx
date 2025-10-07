import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@components/ui/card";
import {Badge} from "@components/ui/badge";
import {Calendar, Loader2, MapPin} from "lucide-react";
import {useParams} from "next/navigation";
import {useCustom} from "@refinedev/core";
import Image from "next/image";
import {CldImage} from "next-cloudinary";

interface Project {
    id: string
    title: string
    description: string
    location: string
    date: string
    image: string
}

const Projects = () => {

    const {type, status} = useParams();

    const{result: {data : projects}, query: {isLoading}} = useCustom<Project[]>({
        url: `/api/${type}/${status}`,
        method: "get"
    })

    console.log(projects)

    if(isLoading) {
        return <span className="h-screen w-full flex justify-center items-enter p-40"><Loader2 className='animate-spin'/></span>;
    }

    if(!projects || projects.length == 0)
        return (
            <div className={"flex justify-center text-gray-500 p-10"}>
                Empty
            </div>
        )

    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:gap-12">
                        {projects?.map((project) => (
                            <Card key={project.id} className="overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-0">
                                    <div className="relative h-64 md:h-full">
                                        <div className={"h-full"}>
                                            <CldImage
                                                width="500"
                                                height="300"
                                                src={project.image ? project.image : "nzsc7hckjyd2k0bzqttk"}
                                                sizes="100vw"
                                                alt="upload image"
                                            />
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="default" className="capitalize bg-green-600">
                                                {status}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <CardHeader className="p-0 mb-4">
                                            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                                            <CardDescription className="text-base">{project.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-0 space-y-4">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{project.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>Completed: {project.date}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;