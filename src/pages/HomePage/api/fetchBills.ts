import { db } from '@/app/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { Bill } from '../types/Bill';

interface fetchBillsType {
    setBills: React.Dispatch<React.SetStateAction<Bill[]>>;
}

export const fetchBills = async (props: fetchBillsType) => {
    const { setBills } = props;
    const snapshot = await getDocs(collection(db, 'bills'));

    setBills(
        snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        })) as Bill[]
    );
};
