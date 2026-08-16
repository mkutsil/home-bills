import z from 'zod';
import { billSchema } from '../model/schema';

export type BillFormValues = z.infer<typeof billSchema>;
