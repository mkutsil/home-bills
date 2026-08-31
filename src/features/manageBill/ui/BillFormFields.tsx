import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input as InputUI } from '@/components/ui/input';

import Input from '@/shared/ui/Input/Input';
import { Controller, type UseFormReturn } from 'react-hook-form';
import { BillFormValues } from '../model/types';

interface BillFormFieldsProps {
    form: UseFormReturn<BillFormValues>;
}

export const BillFormFields = ({ form }: BillFormFieldsProps) => (
    <>
        <FieldGroup>
            <Controller
                name="electricity"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-input-electricity">⚡ Electricity</FieldLabel>
                        <Input
                            {...field}
                            id="form-rhf-input-electricity"
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your electricity bill"
                            autoComplete="electricity"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />

            <Controller
                name="month"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-input-month">Month</FieldLabel>
                        <InputUI
                            type="month"
                            {...field}
                            id="form-rhf-input-month"
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your month"
                            autoComplete="month"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />
        </FieldGroup>
    </>
);
