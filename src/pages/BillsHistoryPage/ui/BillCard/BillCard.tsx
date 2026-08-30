import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bill, updateBillProps } from '@/features/manageBill';
import { EllipsisVerticalIcon, PencilIcon, ShareIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UpdateBillModal } from '../UpdateBillModal';
import { useState } from 'react';

interface BillCardProps {
    bill: Bill;
    updateBill: (props: updateBillProps) => Promise<void>;
    deleteBill: (id: string) => Promise<void>;
}

export const BillCard = (props: BillCardProps) => {
    const { bill, updateBill, deleteBill } = props;
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleUpdate = async ({ id, data }: updateBillProps) => {
        try {
            await updateBill({
                id,
                data,
            });
            setIsDialogOpen(false);
        } catch (error) {
            console.error('Failed to update bill:', error);
        }
    };

    const handleEdit = () => {
        setIsDialogOpen(true);
    };

    const handleDelete = () => {
        deleteBill(bill.id);
    };

    return (
        <>
            <Card className="w-max-content">
                <CardHeader className="flex items-center justify-between gap-5">
                    <CardTitle>
                        {bill &&
                            new Date(bill.month).toLocaleString('uk-UA', {
                                month: 'long',
                                year: 'numeric',
                            })}
                    </CardTitle>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <EllipsisVerticalIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem onClick={handleEdit}>
                                    <PencilIcon />
                                    Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <ShareIcon />
                                    Share
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem variant="destructive" onClick={handleDelete}>
                                    <TrashIcon />
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>
                <CardContent>
                    <p>Вода : {bill.water}</p>
                    <p>Електроенергія : {bill.electricity}</p>
                    <p>Газ : {bill.gas}</p>
                </CardContent>
            </Card>

            <UpdateBillModal
                data={{
                    id: bill.id,
                    electricity: bill.electricity,
                    water: bill.water,
                    gas: bill.gas,
                }}
                handleUpdate={handleUpdate}
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
            />
        </>
    );
};
