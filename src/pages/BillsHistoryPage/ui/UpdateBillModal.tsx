import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Bill, UpdateBillProps } from '@/features/manageBill';
import { BillDialogForm } from '@/features/manageBill';

interface UpdateBillModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    handleUpdate: (props: UpdateBillProps) => Promise<void>;
    isUpdating: boolean;
    data: Omit<Bill, 'createdAt'>;
}

export const UpdateBillModal = ({
    open,
    onOpenChange,
    handleUpdate,
    isUpdating,
    data,
}: UpdateBillModalProps) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            <BillDialogForm handleUpdate={handleUpdate} isUpdating={isUpdating} data={data} />
        </DialogContent>
    </Dialog>
);
