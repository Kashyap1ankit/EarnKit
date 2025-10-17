import z from "zod";

export const ideaSchema = z.object({
  idea: z
    .string()
    .min(15, { message: "Explain a little more" })
    .nonempty({ message: "You must pitch your idea" }),
});

export type ideaSchemaType = z.infer<typeof ideaSchema>;
