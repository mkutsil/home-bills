import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router';
import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { updateTariffsSchema } from './schema';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { useTariffs } from '../model/useTariffs';

export const Tariffs = () => {
    const navigate = useNavigate();
    const { data: tariffs, updateTariff } = useTariffs();

    async function onSubmit(data: z.infer<typeof updateTariffsSchema>) {
        try {
            updateTariff({ data });

            form.reset();
            toast.success('Saved successfully!');
            navigate(RoutePath.home, { replace: true });
        } catch (error) {
            console.error('Failed to update tariffs:', error);
            toast.error('Failed to save tariffs');
        }
    }

    const form = useForm<z.infer<typeof updateTariffsSchema>>({
        resolver: zodResolver(updateTariffsSchema),
        defaultValues: {
            electricity: '',
            water: '',
            gas: '',
        },
    });

    useEffect(() => {
        form.reset({
            electricity: tariffs?.electricity.toString() || '',
            water: tariffs?.water.toString() || '',
            gas: tariffs?.gas.toString() || '',
        });
    }, [tariffs, form]);

    return (
        <Card className="md:w-lg w-xs">
            <CardHeader>
                <CardTitle>Change Tariffs</CardTitle>
                <CardDescription>Enter your tariff details below.</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="electricity"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-electricity">
                                        ⚡ Electricity
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-input-electricity"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your electricity bill"
                                        autoComplete="electricity"
                                    />

                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="water"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-water">💧 Water</FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-input-water"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your water bill"
                                        autoComplete="water"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="gas"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-input-gas">🔥 Gas</FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-input-gas"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter your gas bill"
                                        autoComplete="gas"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button
                        type="submit"
                        form="form-rhf-input"
                        disabled={form.formState.isSubmitting || !form.formState.isDirty}
                    >
                        Save
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    );
};
