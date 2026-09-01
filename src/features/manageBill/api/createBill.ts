import { db } from '@/app/firebase/config';
import { doc, setDoc } from 'firebase/firestore';

interface CreateBillsProps {
    data: {
        water: string;
        electricity: string;
        gas: string;
        month: string;
    };
}

export const createBill = async (props: CreateBillsProps) => {
    const { data } = props;

    await setDoc(doc(db, 'bills', data.month), {
        month: data.month,
        water: Number(data.water),
        electricity: Number(data.electricity),
        gas: Number(data.gas),
        createdAt: Date.now(),
    });
};
