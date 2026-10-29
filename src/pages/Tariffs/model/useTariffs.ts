import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UpdateTariffsType } from '../types/Tariffs';
import { updateTariffs } from '../api/updateTariffs';
import { getTariffs } from '../api/getTariffs';

export const useTariffs = () => {
    const queryClient = useQueryClient();

    const tariffsQuery = useQuery({
        queryKey: ['tariffs'],
        queryFn: getTariffs,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    const updateMutation = useMutation({
        mutationFn: ({ data }: UpdateTariffsType) => updateTariffs({ data }),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tariffs'],
            });
        },
    });

    return {
        ...tariffsQuery,
        updateTariff: updateMutation.mutateAsync,
        isUpdating: updateMutation.isPending,
    };
};
