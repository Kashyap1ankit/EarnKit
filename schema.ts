import z from "zod";

export const ideaSchema = z.object({
  idea: z
    .string({ error: "You must pitch your idea" })
    .min(15, { error: "Explain little more" }),
});

export type ideaSchemaType = z.infer<typeof ideaSchema>;
