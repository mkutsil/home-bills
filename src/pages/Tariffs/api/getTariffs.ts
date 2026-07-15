import { db } from '@/app/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { TariffsType } from '../types/Tariffs';

export const getTariffs = async () => {
    const snapshot = await getDoc(doc(db, 'tariffs', 'default'));

    if (!snapshot.exists()) {
        throw new Error('Tariffs not found');
    }

    return snapshot.data() as TariffsType;
};
