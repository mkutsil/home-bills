import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBills, updateBill, deleteBill, createBill } from '../api';
import { BillFormValues, UpdateBillProps } from './types';

export const useBills = () => {
    const queryClient = useQueryClient();

    const billsQuery = useQuery({
        queryKey: ['bills'],
        queryFn: fetchBills,
        staleTime: 1000 * 60 * 5, // 5 minutes
        enabled: true, // Set to false if you want to disable the query initially
        // select: bills =>
        //     bills.sort((a, b) => new Date(b.month).getTime() - new Date(a.month).getTime()),
        // staleTime: 10000,
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: UpdateBillProps) => updateBill({ id, data }),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['bills'],
            });
        },
    });

    const addBill = useMutation({
        mutationFn: (data: BillFormValues) => createBill({ data }),

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

        addBill: addBill.mutateAsync,
        updateBill: updateMutation.mutateAsync,
        deleteBill: deleteMutation.mutateAsync,

        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };
};
