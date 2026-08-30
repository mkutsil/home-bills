import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBills, updateBill, deleteBill } from '../api';
import { UpdateBillProps } from './types';

export const useBills = () => {
    const queryClient = useQueryClient();

    const billsQuery = useQuery({
        queryKey: ['bills'],
        queryFn: fetchBills,
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: UpdateBillProps) => updateBill({ id, data }),

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
