import { useEffect, useMemo, useState } from 'react';
import { HomeCard } from './HomeCard/HomeCard';
import { Bill } from '../types/Bill';
import { fetchBills } from '../api/fetchBills';
import { getTariffs } from '@/pages/Tariffs/api/getTariffs';
import { TariffsType } from '@/pages/Tariffs/types/Tariffs';
import { calculateBill } from '@/shared/lib/calculateBill';
import { compareBills } from '@/shared/lib/compareBills';

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

    const comparison = useMemo(() => {
        if (bills.length < 3 || !tariffs) {
            return null;
        }

        const currentMonth = calculateBill(bills[0], bills[1], tariffs);

        const previousMonth = calculateBill(bills[1], bills[2], tariffs);

        return compareBills(currentMonth, previousMonth);
    }, [bills, tariffs]);

    return <HomeCard compareBills={comparison} calculateBill={calculation} bill={bills[0]} />;
};
