import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBills, updateBill, deleteBill, createBill } from '../api';
import { Bill, BillFormValues, UpdateBillProps } from './types';

export const useBills = () => {
    const queryClient = useQueryClient();

    const billsQuery = useQuery({
        queryKey: ['bills'],
        queryFn: fetchBills,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }: UpdateBillProps) => updateBill({ id, data }),

        onMutate: async ({ id, data }) => {
            await queryClient.cancelQueries({
                queryKey: ['bills'],
            });

            const previousBills = queryClient.getQueryData<Bill[]>(['bills']);

            queryClient.setQueryData<Bill[]>(['bills'], oldBills =>
                oldBills?.map(bill => (bill.id === id ? { ...bill, ...data } : bill))
            );

            return { previousBills };
        },

        onError: (_error, _variables, context) => {
            if (context?.previousBills) {
                queryClient.setQueryData(['bills'], context.previousBills);
            }
        },

        onSettled: () => {
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

        onMutate: async (id: string) => {
            await queryClient.cancelQueries({
                queryKey: ['bills'],
            });

            const previousBills = queryClient.getQueryData<Bill[]>(['bills']);

            queryClient.setQueryData<Bill[]>(['bills'], oldBills =>
                oldBills?.filter(bill => bill.id !== id)
            );

            return { previousBills };
        },

        onError: (_error, _variables, context) => {
            if (context?.previousBills) {
                queryClient.setQueryData(['bills'], context.previousBills);
            }
        },

        onSettled: () => {
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

        isAdding: addBill.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };
};
