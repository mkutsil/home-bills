import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Bill, updateBillProps } from '@/features/manageBill';
import { BillDialogForm } from '@/features/manageBill';

interface UpdateBillModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    handleUpdate: (props: updateBillProps) => Promise<void>;
    data: Omit<Bill, 'month' | 'createdAt'>;
}

export const UpdateBillModal = ({
    open,
    onOpenChange,
    handleUpdate,
    data,
}: UpdateBillModalProps) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <BillDialogForm handleUpdate={handleUpdate} data={data} />
        </DialogContent>
    </Dialog>
);
