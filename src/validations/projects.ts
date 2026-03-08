import z from "zod";

export const rowsPerPageOptions = [5, 10, 25] as const;

const allowed = z.union(rowsPerPageOptions.map((n) => z.literal(n)));

export const perPageSchema = z
  .string()
  .transform((raw) => {
    const n = z.coerce.number().safeParse(raw);
    return n.success ? n.data : 10;
  })
  .pipe(allowed)
  .catch(10);

export type PerPage = z.infer<typeof perPageSchema>;
