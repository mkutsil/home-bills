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
import { addBillsFormSchema } from './schema';
import { toast } from 'sonner';
import { Bill } from '@/pages/BillsHistoryPage/types/Bill';

interface AddBillsFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    handleUpdate: (props: {
        id: string;
        data: Omit<Bill, 'id' | 'month' | 'createdAt'>;
    }) => Promise<void>;
    data: Omit<Bill, 'month' | 'createdAt'>;
}
export const AddBillsForm = (props: AddBillsFormProps) => {
    const { data, handleUpdate } = props;
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof addBillsFormSchema>>({
        resolver: zodResolver(addBillsFormSchema),
        defaultValues: {
            electricity: data.electricity.toString(),
            water: data.water.toString(),
            gas: data.gas.toString(),
        },
    });

    async function onSubmit(submitData: z.infer<typeof addBillsFormSchema>) {
        try {
            const reformedData = {
                electricity: Number(submitData.electricity),
                water: Number(submitData.water),
                gas: Number(submitData.gas),
            };
            await handleUpdate({ id: data.id, data: reformedData });

            form.reset();

            toast.success('Saved successfully!');

            navigate(RoutePath.home, { replace: true });
        } catch (error) {
            console.error('Failed to update tariffs:', error);

            toast.error('Failed to save tariffs');
        }
    }

    return (
        <Card className="w-full max-w-[calc(100%-2rem)]">
            <CardHeader>
                <CardTitle>Add Bills</CardTitle>
                <CardDescription>Enter your bill details below.</CardDescription>
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
                    <Button type="submit" form="form-rhf-input">
                        Save
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    );
};
