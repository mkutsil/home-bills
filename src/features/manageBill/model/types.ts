import z from 'zod';
import { billSchema } from '../model/schema';

export type BillFormValues = z.infer<typeof billSchema>;

export type Bill = {
    id: string;
    month: string;
    water: number;
    electricity: number;
    gas: number;
    createdAt: number;
};

export interface UpdateBillProps {
    id: string;
    data: Omit<Bill, 'id' | 'month' | 'createdAt'>;
}
