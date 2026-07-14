import { db } from '@/app/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { TariffsType } from '../types/Tariffs';
import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    electricity: z.string(),
    water: z.string(),
    gas: z.string(),
});

export type TariffsFormValues = z.infer<typeof formSchema>;

interface GetTariffsProps {
    form: UseFormReturn<TariffsFormValues>;
}

export const getTariffs = async (props: GetTariffsProps) => {
    const { form } = props;
    const snapshot = await getDoc(doc(db, 'tariffs', 'default'));

    if (snapshot.exists()) {
        const data = snapshot.data() as TariffsType;

        form.reset({
            electricity: data.electricity.toString(),
            water: data.water.toString(),
            gas: data.gas.toString(),
        });
    }
};
