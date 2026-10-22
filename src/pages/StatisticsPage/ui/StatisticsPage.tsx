import { calculateBill } from '@/shared/lib/calculateBill';
import { Recharts } from './Recharts';
import { useBills } from '@/features/manageBill/model/useBills';
import { Skeleton } from '@/components/ui/skeleton';
import { RechartsData } from '../model/types';
import { useTariffs } from '@/pages/Tariffs/model/useTariffs';

export const StatisticsPage = () => {
    const { data: bills = [] } = useBills();

    const { data: tariffs } = useTariffs();

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
