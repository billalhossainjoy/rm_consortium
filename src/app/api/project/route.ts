import prisma from "@lib/prima";
import {NextRequest} from "next/server";


export async function GET(req: NextRequest) {
    const start = parseInt(req.nextUrl.searchParams.get("_start") as string) || 0;
    const end = parseInt(req.nextUrl.searchParams.get("_end") as string) || 10;
    const take = end - start; // number of items per page

    console.log("test");

    try {
        // Fetch data with pagination
        const data = await prisma.project.findMany({
            // skip: start,       // how many items to skip
            // take: take,        // how many items to fetch
            orderBy: {
                createdAt: "desc",
            },
        });

        // Get total count for pagination headers
        const totalCount = await prisma.project.count();

        // Return paginated response with total count in headers
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "X-Total-Count": totalCount.toString(), // useful for frontend pagination
            },
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return new Response(JSON.stringify({ error: "Error fetching projects" }), {
            status: 500,
        });
    }
}