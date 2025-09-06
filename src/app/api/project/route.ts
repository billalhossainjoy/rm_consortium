import prisma from "@lib/prima";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    // const start = parseInt(req.nextUrl.searchParams.get("_start") as string) || 0;
    // const end = parseInt(req.nextUrl.searchParams.get("_end") as string) || 10;

    try {
        // Fetch data from the 'SubmissionModel' using Prisma's 'findMany' method
        const data = await prisma.project.findMany({
            orderBy:{
                createdAt: "desc",
            }
        });


        // Respond with the data and total count
        return new Response(
            JSON.stringify(data ),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    } catch (error) {
        console.error("Error fetching submissions:", error);
        return new Response(
            JSON.stringify({ error: 'Error fetching submissions' }),
            { status: 500 }
        );
    }
}