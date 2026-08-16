import { db } from '@/app/firebase/config';
import { addDoc, collection } from 'firebase/firestore';

interface createBillsType {
    water: string;
    electricity: string;
    gas: string;
}

export const createBills = async (props: createBillsType) => {
    const { water, electricity, gas } = props;
    const now = new Date();

    const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    await addDoc(collection(db, 'bills'), {
        month,
        water: Number(water),
        electricity: Number(electricity),
        gas: Number(gas),
        createdAt: Date.now(),
    });
};
