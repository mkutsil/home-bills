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
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { useNavigate } from 'react-router';
import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { useEffect } from 'react';
import { TariffsType } from '../types/Tariffs';

export const Tariffs = () => {
    // const [tariffs, setTariffs] = useState<Tariffs | null>(null);

    const navigate = useNavigate();
    const formSchema = z.object({
        electricity: z
            .string()
            .min(1, 'Electricity must be at least 1 character.')
            .max(10, 'Electricity must be at most 10 characters.')
            .regex(/^[0-9]+$/, 'Electricity can only contain numbers.'),
        water: z
            .string()
            .min(1, 'Water must be at least 1 character.')
            .max(10, 'Water must be at most 10 characters.')
            .regex(/^[0-9]+$/, 'Water can only contain numbers.'),
        gas: z
            .string()
            .min(1, 'Gas must be at least 1 character.')
            .max(10, 'Gas must be at most 10 characters.')
            .regex(/^[0-9]+$/, 'Gas can only contain numbers.'),
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        const create = async () => {
            await setDoc(doc(db, 'tariffs', 'default'), {
                electricity: data.electricity,
                gas: data.gas,
                water: data.water,
            });
        };

        create();
        form.reset();
        navigate(RoutePath.home, { replace: true });
    }

    useEffect(() => {
        const fetchTariffs = async () => {
            const snapshot = await getDoc(doc(db, 'tariffs', 'default'));

            if (snapshot.exists()) {
                const data = snapshot.data() as TariffsType;

                form.reset({
                    electricity: data.electricity.toString(),
                    water: data.water.toString(),
                    gas: data.gas.toString(),
                });
            }
        };

        fetchTariffs();
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            electricity: '',
            water: '',
            gas: '',
        },
    });

    return (
        <Card className="w-lg">
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
                    <Button type="submit" form="form-rhf-input">
                        Save
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    );
};
