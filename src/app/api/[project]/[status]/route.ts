import prisma from "@lib/prima";

interface Options{
    params: Promise<{
        project: string;
        status: string;
    }>
}


export async function GET(_: Request, {params}: Options){
    const {project, status} = await params
    const data = await prisma.project.findMany({
        where:{
            projectType: {
                equals: project,
                mode: "insensitive"
            },
            projectStatus: {
                equals: status,
                mode: "insensitive"
            }
        }
    })

    return Response.json(data)
}



export async function POST (req: Request, {params}: Options) {

    const {project: projectType, status: projectStatus} = await params
    const {location, title, description, date, image} = await req.json()

    console.log(image)

    const project =await prisma.project.create({
        data: {
            title,
            description,
            projectType,
            projectStatus,
            location,
            date,
            image
        }
    })

    return Response.json({
        status: "success",
        data: project
    })
}
