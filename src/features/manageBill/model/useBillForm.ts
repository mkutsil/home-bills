import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { billSchema } from './schema';
import { BillFormValues } from './types';

interface BillFormFields {
    water: string;
    electricity: string;
    gas: string;
    month: string;
}

export const useBillForm = (props: Partial<BillFormFields>) => {
    const form = useForm<BillFormValues>({
        resolver: zodResolver(billSchema),
        defaultValues: {
            water: props.water,
            electricity: props.electricity,
            gas: props.gas,
            month: props.month,
        },
    });
    return { form };
};
