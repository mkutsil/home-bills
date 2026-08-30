import { db } from '@/app/firebase/config';
import { addDoc, collection } from 'firebase/firestore';

interface CreateBillsProps {
    data: {
        water: string;
        electricity: string;
        gas: string;
    };
}

export const createBill = async (props: CreateBillsProps) => {
    const { data } = props;
    const now = new Date();

    const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    await addDoc(collection(db, 'bills'), {
        month,
        water: Number(data.water),
        electricity: Number(data.electricity),
        gas: Number(data.gas),
        createdAt: Date.now(),
    });
};
