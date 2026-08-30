import { db } from '@/app/firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Bill } from '../../../pages/BillsHistoryPage/types/Bill';

export const fetchBills = async (): Promise<Bill[]> => {
    const q = query(collection(db, 'bills'), orderBy('month', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(
        doc =>
            ({
                id: doc.id,
                ...doc.data(),
            }) as Bill
    );
};
