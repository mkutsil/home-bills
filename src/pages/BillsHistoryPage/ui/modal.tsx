import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Bill } from '../types/Bill';
import { BillDialogForm } from '@/features/manageBill';

interface DialogDemoProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    handleUpdate: (props: {
        id: string;
        data: Omit<Bill, 'id' | 'month' | 'createdAt'>;
    }) => Promise<void>;
    data: Omit<Bill, 'month' | 'createdAt'>;
}

export const DialogDemo = ({ open, onOpenChange, handleUpdate, data }: DialogDemoProps) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
            {/* className="sm:max-w-sm" */}
            {/* <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here.</DialogDescription>
            </DialogHeader> */}
            <BillDialogForm handleUpdate={handleUpdate} data={data} />
            {/* <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button type="submit">Save changes</Button>
            </DialogFooter> */}
        </DialogContent>
    </Dialog>
);
