import { db } from '@/app/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { UpdateBillProps } from '../model/types';

export const updateBill = async (props: UpdateBillProps) => {
    const { data, id } = props;

    await updateDoc(doc(db, 'bills', id), {
        ...data,
        createdAt: Date.now(),
    });
};
