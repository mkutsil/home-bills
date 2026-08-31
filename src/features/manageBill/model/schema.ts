import * as z from 'zod';

export const billSchema = z.object({
    electricity: z
        .string()
        .min(1, 'Electricity must be at least 1 character.')
        .max(10, 'Electricity must be at most 10 characters.')
        .regex(/^[0-9]+$/, 'Electricity can only contain numbers.'),
    water: z
        .string()
        .min(1, 'Water must be at least 1 character.')
        .max(10, 'Water must be at most 10 characters.')
        .regex(/^[0-9]+$/, 'Water can only contain numbers.'),
    gas: z
        .string()
        .min(1, 'Gas must be at least 1 character.')
        .max(10, 'Gas must be at most 10 characters.')
        .regex(/^[0-9]+$/, 'Gas can only contain numbers.'),
    month: z.string(),
});
