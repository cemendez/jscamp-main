import * as z from "zod";

const jobSchema = z.object({
    titulo: z
        .string({ error: "El título es obligatorio" })
        .min(3, "El título debe tener al menos 3 caracteres")
        .max(100, "El título no puee exceder los 100 caracteres"),
    empresa: z.string({ error: "La empresa es requerida" }),
    ubicacion: z.string({ error: "La ubicación es requerida" }),
    descripcion: z.string({ error: "La descripción es requerida" }),
    data: z.object({
        technology: z.array(z.string()),
        modalidad: z.string(),
        nivel: z.string(),
    }),
    content: z.object({
        description: z.string(),
        responsibilities: z.string(),
        requirements: z.string(),
        about: z.string(),
    }),
});

export function validateJob(input) {
    return jobSchema.safeParse(input);
}

export function validatePartialJob(input) {
    return jobSchema.partial().safeParse(input);
}
