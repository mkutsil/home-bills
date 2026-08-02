import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchBills } from './fetchBills';
import { editBill } from './editBill';
import { deleteBill } from './deleteBill';
import { Bill } from '@/pages/BillsHistoryPage/types/Bill';

export const useBills = () => {
    const queryClient = useQueryClient();

    const billsQuery = useQuery({
        queryKey: ['bills'],
        queryFn: fetchBills,
    });

    const updateMutation = useMutation({
        mutationFn: ({
            id,
            data,
        }: {
            id: string;
            data: Omit<Bill, 'id' | 'month' | 'createdAt'>;
        }) => editBill({ id, data }),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['bills'],
            });
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteBill({ id }),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['bills'],
            });
        },
    });

    return {
        ...billsQuery,

        updateBill: updateMutation.mutateAsync,
        deleteBill: deleteMutation.mutateAsync,

        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };
};
