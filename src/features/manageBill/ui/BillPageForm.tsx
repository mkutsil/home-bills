import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Field } from '@/components/ui/field';
import { toast } from 'sonner';
import { BillFormFields } from './BillFormFields';
import { useBillForm } from '../model/useBillForm';
import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { useNavigate } from 'react-router-dom';
import { BillFormValues } from '../model/types';
import { createBill } from '../api';

export const BillPageForm = () => {
    const { form } = useBillForm({});
    const navigate = useNavigate();
    async function onSubmit(submitData: BillFormValues) {
        try {
            await createBill({ data: submitData });
            form.reset();

            toast.success('Saved successfully!');

            navigate(RoutePath.home, { replace: true });
        } catch (error) {
            console.error('Failed to update bill:', error);

            toast.error('Failed to save bill');
        }
    }

    return (
        <Card className="md:w-lg w-xs">
            <CardHeader>
                <CardTitle>Add Bills</CardTitle>
                <CardDescription>Enter your bill details below.</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
                    <BillFormFields form={form} />
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
