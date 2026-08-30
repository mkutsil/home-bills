import { db } from '@/app/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { updateBillProps } from '../model/types';

export const updateBill = async (props: updateBillProps) => {
    const { data, id } = props;

    await updateDoc(doc(db, 'bills', id), {
        ...data,
        createdAt: Date.now(),
    });
};
