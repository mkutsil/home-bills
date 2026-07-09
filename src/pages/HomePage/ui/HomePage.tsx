import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { useEffect, useState } from 'react';
import { HomeCard } from './HomeCard/HomeCard';
import { Bill } from '../types/Bill';

export const HomePage = () => {
    const [bills, setBills] = useState<Bill[]>([]);

    useEffect(() => {
        const fetchBills = async () => {
            const snapshot = await getDocs(collection(db, 'bills'));

            setBills(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Bill[]
            );
        };

        fetchBills();
    }, []);

    return <HomeCard bill={bills[0]} />;
};
