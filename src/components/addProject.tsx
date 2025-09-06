"use client"

import React, {useState} from 'react';
import {useForm} from "@refinedev/react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@components/ui/form";
import {Input} from "@components/ui/input";
import {Textarea} from "@components/ui/textarea";
import {Button} from "@components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProjectInput, projectSchema, UpdateProjectInput} from "@validation/schema";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@components/ui/select";
import {CldImage, CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults} from "next-cloudinary";
import {useCustomMutation} from "@refinedev/core";
import toast from "react-hot-toast";

interface Results extends CloudinaryUploadWidgetResults{
    info: CloudinaryUploadWidgetInfo & {
        public_id: string;
    }
}

const AddProject = ({data}: { data?: UpdateProjectInput }) => {
    const [result, setResult] = useState<Results>()
    const {mutate} = useCustomMutation()
    const [error, setError] = useState()

    const form = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: data?.title || "",
            description: data?.description || "",
            projectStatus: data?.projectStatus || undefined,
            location: data?.location || "",
            date: data?.date || "",
            projectType: data?.projectType || undefined,
        }
    })

    function onSubmit(input: ProjectInput) {
        console.log(input)
        if(!data){
            mutate({
                url: `/api/${input.projectType}/${input.projectStatus}`,
                method: "post",
                values: {
                    ...input,
                    image: result?.info?.public_id
                }

            },{
                onSuccess: () => {
                    form.setValue("title", '')
                    form.setValue("description", '')
                    form.setValue("location", '')
                    form.setValue("date", '')
                    setResult(undefined)
                    toast.success("Created successfully")
                }
            })
        }

        if(data){
            console.log(data)
            mutate({
                url: `/api/${data.projectType}/${data.projectStatus}/${data.id}`,
                method: "patch",
                values: {
                    ...input,
                    image: result?.info?.public_id
                }

            },{
                onSuccess: () => {
                    toast("Successfully created successfully")
                }
            })
        }

    }

    function onSuccess(result: CloudinaryUploadWidgetResults){
        setResult(result as Results)
    }

    return (
        <div className={"max-w-7xl w-full border border-gray-200 p-6 rounded space-y-6"}>
            <div>
                <h1 className={"font-bold text-xl"}>Add new project</h1>
            </div>
            <Form {...form}>
               <form className={"space-y-6"} onSubmit={form.handleSubmit(onSubmit)}>
                   {error && <p className={"text-center text-destructive"}>{error}</p>}
                   <FormField
                       control={form.control}
                       name={"title"}
                       render={({ field }) => (
                           <FormItem>
                               <FormLabel>Title</FormLabel>
                               <FormControl>
                                   <Input
                                       placeholder={"Rm consortium"}
                                       type={"text"}
                                       autoComplete={"off"}
                                       {...field}
                                   />
                               </FormControl>
                               <FormMessage />
                           </FormItem>
                       )}
                   />

                   <FormField
                       control={form.control}
                       name={"description"}
                       render={({ field }) => (
                           <FormItem>
                               <FormLabel>Description</FormLabel>
                               <FormControl>
                                   <Textarea
                                       placeholder={"The ..."}
                                       autoComplete={"off"}
                                       {...field}
                                   />
                               </FormControl>
                               <FormMessage />
                           </FormItem>
                       )}
                   />

                   <FormField
                       control={form.control}
                       name={"projectType"}
                       render={({ field }) => (
                           <FormItem>
                               <FormLabel>Type</FormLabel>
                               <FormControl>
                                   <Select value={field.value} onValueChange={field.onChange}>
                                       <SelectTrigger className="w-[180px]">
                                           <SelectValue placeholder="Project Type" />
                                       </SelectTrigger>
                                       <SelectContent>
                                           <SelectItem value="RESIDENTIAL">Residential</SelectItem>
                                           <SelectItem value="COMMERCIAL">Commercial</SelectItem>
                                       </SelectContent>
                                   </Select>
                               </FormControl>
                               <FormMessage />
                           </FormItem>
                       )}
                   />

                    <FormField
                       control={form.control}
                       name={"projectStatus"}
                       render={({ field }) => (
                           <FormItem>
                               <FormLabel>Status</FormLabel>
                               <FormControl>
                                   <Select value={field.value} onValueChange={field.onChange}>
                                       <SelectTrigger className="w-[180px]">
                                           <SelectValue placeholder="Status" />
                                       </SelectTrigger>
                                       <SelectContent>
                                           <SelectItem value="COMPLETED">Completed</SelectItem>
                                           <SelectItem value="ONGOING">Ongoing</SelectItem>
                                       </SelectContent>
                                   </Select>
                               </FormControl>
                               <FormMessage />
                           </FormItem>
                       )}
                   />

                   <FormField
                       control={form.control}
                       name={"location"}
                       render={({ field }) => (
                           <FormItem>
                               <FormLabel>Location</FormLabel>
                               <FormControl>
                                   <Input
                                       placeholder={"Mohammadpur, Dhaka, Bangladesh"}
                                       type={"text"}
                                       autoComplete={"off"}
                                       {...field}
                                   />
                               </FormControl>
                               <FormMessage />
                           </FormItem>
                       )}
                   />

                   <FormField
                       control={form.control}
                       name={"date"}
                       render={({ field }) => (
                           <FormItem>
                               <FormLabel>Date</FormLabel>
                               <FormControl>
                                   <Input
                                       placeholder={"June 18, 2024"}
                                       type={"text"}
                                       autoComplete={"off"}
                                       {...field}
                                   />
                               </FormControl>
                               <FormMessage />
                           </FormItem>
                       )}
                   />

                   {
                       result?.info.public_id && <CldImage
                           width="300"
                           height="200"
                           src={result.info?.public_id}
                           sizes="100vw"
                           alt="upload image"
                       />
                   }

                   {
                      !result?.info.public_id && data?.image && <CldImage
                           width="300"
                           height="200"
                           src={data.image}
                           sizes="100vw"
                           alt="upload image"
                       />
                   }



                   <div className={"w-full"}>
                       <CldUploadWidget
                           uploadPreset="uploads"
                           options={{
                               multiple: false,
                           }}
                           onSuccess={onSuccess}>
                           {({ open }) => {
                               return (
                                   <Button variant={"outline"} onClick={() => open()}>
                                       Upload an Image
                                   </Button>
                               );
                           }}
                       </CldUploadWidget>
                   </div>



                   <Button>
                       {
                           !data ? "Add project" : "Update project"
                       }
                   </Button>

               </form>
            </Form>
        </div>
    );
};

export default AddProject;