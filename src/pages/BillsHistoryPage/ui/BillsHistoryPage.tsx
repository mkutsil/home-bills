import { BillCard } from './BillCard/BillCard';
import { BillsEmpty } from '@/widgets/BillsEmpty';
import { useBills } from '@/features/manageBill/model/useBills';
import { Skeleton } from '@/components/ui/skeleton';

export const BillsHistoryPage = () => {
    const { data: bills = [], isLoading, isError, updateBill, deleteBill } = useBills();

    if (isLoading) {
        return (
            <div className="flex gap-1.5 w-full flex-wrap justify-center">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton className="h-[130px] w-[185px]" key={i} />
                ))}
            </div>
        );
    }

    if (bills.length === 0 || isError) {
        return <BillsEmpty />;
    }

    return (
        <div className="flex gap-1.5 w-full flex-wrap justify-center">
            {bills.map(bill => (
                <BillCard
                    bill={bill}
                    key={bill.id}
                    updateBill={updateBill}
                    deleteBill={deleteBill}
                />
            ))}
        </div>
    );
};
