import { db } from '@/app/firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';

export interface DeleteBillType {
    id: string;
}

export const deleteBill = async (props: DeleteBillType) => {
    const { id } = props;

    await deleteDoc(doc(db, 'bills', id));
};
