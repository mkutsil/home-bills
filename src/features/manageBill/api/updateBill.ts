import { db } from '@/app/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';

interface updateBillType {
    id: string;
    data: {
        water: string;
        electricity: string;
        gas: string;
    };
}

export const updateBill = async (props: updateBillType) => {
    const { data, id } = props;
    const now = new Date();

    const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    await updateDoc(doc(db, 'bills', id), {
        month,
        water: Number(data.water),
        electricity: Number(data.electricity),
        gas: Number(data.gas),
        createdAt: Date.now(),
    });
};
