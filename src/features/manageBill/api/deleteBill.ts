import { db } from '@/app/firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';

export interface DeleteBillProps {
    id: string;
}

export const deleteBill = async (props: DeleteBillProps) => {
    const { id } = props;

    await deleteDoc(doc(db, 'bills', id));
};
