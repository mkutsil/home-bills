import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { BillFormFields } from './BillFormFields';
import { useBillForm } from '../model/useBillForm';
import {
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Bill, BillFormValues, UpdateBillProps } from '../model/types';

interface BillDialogFormProps {
    handleUpdate: (props: UpdateBillProps) => Promise<void>;
    data: Omit<Bill, 'month' | 'createdAt'>;
}
export const BillDialogForm = (props: BillDialogFormProps) => {
    const { data, handleUpdate } = props;
    const { form } = useBillForm({
        water: data.water.toString(),
        electricity: data.electricity.toString(),
        gas: data.gas.toString(),
    });

    async function onSubmit(submitData: BillFormValues) {
        try {
            const reformedData = {
                electricity: +submitData.electricity,
                water: +submitData.water,
                gas: +submitData.gas,
            };
            await handleUpdate({ id: data.id, data: reformedData });

            form.reset();

            toast.success('Saved successfully!');
        } catch (error) {
            console.error('Failed to update tariffs:', error);

            toast.error('Failed to save tariffs');
        }
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle>Edit Bill</DialogTitle>
                <DialogDescription>Make changes to your bill here.</DialogDescription>
            </DialogHeader>
            <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
                <BillFormFields form={form} />
            </form>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button type="submit" form="form-rhf-input">
                    Save changes
                </Button>
            </DialogFooter>
        </>
    );
};
