import {updateProjectSchema} from "@validation/schema";
import prisma from "@lib/prima";

interface Options{
    params: Promise<{
        project: string;
        status: string;
        id: string
    }>
}
export async function PATCH (req: Request, {params}: Options) {

    const { project: projectType, status: projectStatus, id} = await params
    const {location, title, description, date, image} = updateProjectSchema.parse(await req.json())

    const data = await prisma.project.update({
        where: {
            id: id,
        },
        data: {
            title,
            location,
            projectType,
            description,
            projectStatus,
            date,
            image
        }
    })

    return Response.json({
        status: "success",
        data
    })
}

export async function DELETE(req: Request, {params}: Options) {
    try {
        const {id} =await params
        console.log(id)

        await prisma.project.delete({
            where: {
                id
            }
        })

        return Response.json({
            status: "success",
        })
    } catch (error) {
        console.log(error)
    }
}