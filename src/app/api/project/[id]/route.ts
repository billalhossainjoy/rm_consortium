import prisma from "@lib/prima";


interface Options {
    params: Promise<{
        id: string;
    }>
}

export async function GET(req: Request, {params}: Options) {
    const {id} =await params;
    console.log(id)

    const data = await prisma.project.findUnique({
        where: {
            id
        }
    })

    return Response.json(data)

}