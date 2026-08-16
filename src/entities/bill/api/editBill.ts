import { db } from '@/app/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { Bill } from '../../../pages/BillsHistoryPage/types/Bill';

export type EditBillDataType = Pick<Bill, 'water' | 'electricity' | 'gas'>;

export interface EditBillType {
    id: string;
    data: EditBillDataType;
}

export const editBill = async (props: EditBillType) => {
    const { id, data } = props;
    await updateDoc(doc(db, 'bills', id), {
        ...data,
        // water: Number(data.water),
        // electricity: Number(data.electricity),
        // gas: Number(data.gas),
    });
};
