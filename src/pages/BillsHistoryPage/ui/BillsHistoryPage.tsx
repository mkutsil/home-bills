import { BillsEmpty } from '@/widgets/BillsEmpty';
import { useBills } from '@/features/manageBill';
import { Skeleton } from '@/components/ui/skeleton';
import { BillCard } from './BillCard/BillCard';
import { toast } from 'sonner';

export const BillsHistoryPage = () => {
    const { data: bills = [], isLoading, isError, updateBill, isUpdating, deleteBill } = useBills();

    const handleDeleteBill = async (id: string) => {
        try {
            await deleteBill(id);
            toast.success('Bill deleted successfully.');
        } catch (error) {
            console.error('Failed to delete bill:', error);
            toast.error('Failed to delete bill.');
        }
    };
    if (isLoading) {
        return (
            <div className="flex gap-1.5 w-full flex-wrap justify-center">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton className="h-32.5 w-46.25" key={i} />
                ))}
            </div>
        );
    }

    if (isError) return <p>Error loading bills.</p>;

    if (bills.length === 0) {
        return <BillsEmpty />;
    }

    return (
        <div className="flex flex-col gap-1 w-full max-w-80 mx-auto">
            {bills.map((bill, index) => {
                const year = bill.month.slice(0, 4);
                const previousYear = bills[index - 1]?.month.slice(0, 4);

                const isNewYear = year !== previousYear;

                return (
                    <div key={bill.id}>
                        {isNewYear && <span className="text-lg font-bold">{year}</span>}

                        <div className="relative pl-8">
                            <div
                                className="
                        absolute left-1.25 top-0 h-full
                        border-l-2 border-dashed
                    "
                            />

                            <div
                                className="
                        absolute left-0 top-2
                        size-3 rounded-full bg-primary
                    "
                            />

                            <BillCard
                                bill={bill}
                                updateBill={updateBill}
                                isUpdating={isUpdating}
                                deleteBill={handleDeleteBill}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
