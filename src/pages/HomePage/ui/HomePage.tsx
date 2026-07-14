import { useEffect, useState } from 'react';
import { HomeCard } from './HomeCard/HomeCard';
import { Bill } from '../types/Bill';
import { fetchBills } from '../api/fetchBills';

export const HomePage = () => {
    const [bills, setBills] = useState<Bill[]>([]);

    useEffect(() => {
        fetchBills({ setBills });
    }, []);

    return <HomeCard bill={bills[0]} />;
};
