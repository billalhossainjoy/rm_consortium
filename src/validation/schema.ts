import {z} from "zod"

export const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    date: z.string(),
    projectType: z.enum(["RESIDENTIAL", "COMMERCIAL"]).optional(),
    projectStatus: z.enum(["ONGOING", "COMPLETED"]).optional(),
    image: z.string().optional(),
})

export const updateProjectSchema = projectSchema.partial().extend({
    id: z.number().positive("Invalid project ID").optional(),
})

export type ProjectInput = z.infer<typeof projectSchema>
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>
