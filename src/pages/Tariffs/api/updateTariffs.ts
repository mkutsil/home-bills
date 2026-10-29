import { db } from '@/app/firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { UpdateTariffsType } from '../types/Tariffs';

export const updateTariffs = async (props: UpdateTariffsType): Promise<void> => {
    const { data } = props;

    await setDoc(doc(db, 'tariffs', 'default'), {
        electricity: Number(data.electricity),
        gas: Number(data.gas),
        water: Number(data.water),
    });
};
