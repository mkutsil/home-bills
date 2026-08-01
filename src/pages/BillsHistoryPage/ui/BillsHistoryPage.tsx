import { useEffect, useState } from 'react';
import { Bill } from '../types/Bill';
import { fetchBills } from '../api/fetchBills';
import { Skeleton } from '@/components/ui/skeleton';
import { BillCard } from './BillCard/BillCard';

import { BillsEmpty } from '@/widgets/BillsEmpty';

export const BillsHistoryPage = () => {
    const [bills, setBills] = useState<Bill[] | null>(null);

    useEffect(() => {
        fetchBills().then(bill => setBills(bill));
    }, []);

    const billsIsEmpty = bills && bills.length === 0;

    if (billsIsEmpty) {
        return <BillsEmpty />;
    }

    return (
        <div className="flex gap-1.5 w-full flex-wrap justify-center">
            {bills
                ? bills?.map(bill => <BillCard bill={bill} key={bill.id} />)
                : Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton className="h-[130px] w-[185px]" key={i} />
                  ))}
        </div>
    );
};
