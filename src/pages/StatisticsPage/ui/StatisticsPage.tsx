import { calculateBill } from '@/shared/lib/calculateBill';
import { Recharts } from './Recharts';
import { useBills } from '@/features/manageBill/model/useBills';
import { Skeleton } from '@/components/ui/skeleton';
import { RechartsData } from '../model/types';
import { useTariffs } from '@/pages/Tariffs';

export const StatisticsPage = () => {
    const { data: bills = [], isLoading: isBillsLoading, isError: isBillsError } = useBills();
    const { data: tariffs, isLoading: isTariffsLoading, isError: isTariffsError } = useTariffs();

    if (isBillsLoading || isTariffsLoading) {
        return <Skeleton className="h-100 w-200 rounded-md" />;
    }

    if (isBillsError || isTariffsError || !tariffs) {
        return <p>Error</p>;
    }

    if (bills.length < 3) {
        return <p>Add at least three accounts for statistics.</p>;
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
