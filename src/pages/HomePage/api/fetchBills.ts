import { db } from '@/app/firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Bill } from '../types/Bill';

interface fetchBillsType {
    setBills: React.Dispatch<React.SetStateAction<Bill[]>>;
}

export const fetchBills = async (props: fetchBillsType) => {
    const { setBills } = props;

    const q = query(collection(db, 'bills'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    setBills(
        snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })) as Bill[]
    );
};
