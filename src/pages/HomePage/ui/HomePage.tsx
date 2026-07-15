import { useEffect, useMemo, useState } from 'react';
import { HomeCard } from './HomeCard/HomeCard';
import { Bill } from '../types/Bill';
import { fetchBills } from '../api/fetchBills';
import { getTariffs } from '@/pages/Tariffs/api/getTariffs';
import { TariffsType } from '@/pages/Tariffs/types/Tariffs';
import { calculateBill } from '@/shared/lib/calculateBill';

export const HomePage = () => {
    const [bills, setBills] = useState<Bill[]>([]);
    const [tariffs, setTariffs] = useState<TariffsType | null>(null);

    useEffect(() => {
        fetchBills({ setBills });
        getTariffs().then(tariffs => setTariffs(tariffs));
    }, []);

    const calculation = useMemo(() => {
        if (bills.length < 2 || !tariffs) {
            return null;
        }

        return calculateBill(bills[0], bills[1], tariffs);
    }, [bills, tariffs]);

    return <HomeCard calculateBill={calculation} bill={bills[0]} />;
};
