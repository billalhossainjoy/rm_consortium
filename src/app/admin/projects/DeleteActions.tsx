import React from 'react';
import {useApiUrl, useCustomMutation, useDelete, useList} from "@refinedev/core";
import {Trash} from "lucide-react";
import {Button} from "@components/ui/button";
import toast from "react-hot-toast";

interface Project {
    id: string;
    title: string;
    description: string;
    projectType: string;
    projectStatus: string;
    date: string;
    location: string;
}

const DeleteActions: React.FC<{data: Project}> = ({data: {id, projectType, projectStatus}}) => {
    const {result, query: {refetch}} = useList({resource: "project"});
    const api = useApiUrl()
    const {mutate} = useCustomMutation()
    const deleteHandler = () => {
        mutate({
            url: `${api}/${projectType}/${projectStatus}/${id}`,
            method: "delete",
            values: {},
        },{
            onSuccess: () => {
                refetch()
                toast.success("Project deleted successfully.")
            }
        })
    }
    return (
        <Button
            onClick={deleteHandler}
            className={"bg-destructive hover:bg-destructive/80 cursor-pointer"}>Delete</Button>
    );
};

export default DeleteActions;