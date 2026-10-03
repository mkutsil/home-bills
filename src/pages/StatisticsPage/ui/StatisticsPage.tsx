import { calculateBill } from '@/shared/lib/calculateBill';
import { Recharts } from './Recharts';
import { useBills } from '@/features/manageBill/model/useBills';
import { useEffect, useState } from 'react';
import { getTariffs } from '@/pages/Tariffs/api/getTariffs';
import { TariffsType } from '@/pages/Tariffs/types/Tariffs';
import { Skeleton } from '@/components/ui/skeleton';
import { RechartsData } from '../model/types';

export const StatisticsPage = () => {
    const { data: bills = [] } = useBills();

    const [tariffs, setTariffs] = useState<TariffsType | null>(null);

    useEffect(() => {
        getTariffs().then(tariffs => setTariffs(tariffs));
    }, []);

    if (bills.length < 3 || !tariffs) {
        return <Skeleton className="h-100 w-200 rounded-md" />;
    }

    const data: RechartsData = bills
        .map((bill, index) => {
            if (index === bills.length - 1) {
                return null;
            }

            const nextBill = bills[index + 1];

            const billCalculation = calculateBill(bill, nextBill, tariffs);

            return {
                name: billCalculation.month,
                UAH: billCalculation.total,
            };
        })
        .filter(Boolean);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1>Statistics</h1>
            <Recharts data={data} />
        </div>
    );
};
