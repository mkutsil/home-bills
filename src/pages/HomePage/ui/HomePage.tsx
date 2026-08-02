import { useEffect, useMemo, useState } from 'react';
import { HomeCard } from './HomeCard/HomeCard';
import { getTariffs } from '@/pages/Tariffs/api/getTariffs';
import { TariffsType } from '@/pages/Tariffs/types/Tariffs';
import { calculateBill } from '@/shared/lib/calculateBill';
import { compareBills } from '@/shared/lib/compareBills';
import { BillsEmpty } from '@/widgets/BillsEmpty';
import { useBills } from '@/entities/bill/api/useBill';

export const HomePage = () => {
    const { data: bills = [] } = useBills();

    const [tariffs, setTariffs] = useState<TariffsType | null>(null);

    useEffect(() => {
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

    const billsIsEmpty = bills && bills.length === 0;

    if (billsIsEmpty) {
        return <BillsEmpty />;
    }

    return <HomeCard compareBills={comparison} calculateBill={calculation} bill={bills[0]} />;
};
