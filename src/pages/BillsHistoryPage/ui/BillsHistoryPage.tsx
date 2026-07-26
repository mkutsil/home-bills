import { useEffect, useState } from 'react';
import { Bill } from '../types/Bill';
import { fetchBills } from '../api/fetchBills';
import { BillCard } from './BillCard/BillCard';

export const BillsHistoryPage = () => {
    const [bills, setBills] = useState<Bill[]>([]);

    useEffect(() => {
        fetchBills().then(bill => setBills(bill));
    }, []);

    return (
        <div className="flex gap-1.5">
            {bills?.map(bill => (
                <BillCard bill={bill} key={bill.id} />
            ))}
        </div>
    );
};
