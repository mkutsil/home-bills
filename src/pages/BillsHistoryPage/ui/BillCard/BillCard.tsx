import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bill } from '@/features/manageBill';
import {
    Droplets,
    EllipsisVerticalIcon,
    Flame,
    PencilIcon,
    ShareIcon,
    TrashIcon,
    Zap,
} from 'lucide-react';
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
import { UpdateBillProps } from '@/features/manageBill/model/types';

interface BillCardProps {
    bill: Bill;
    updateBill: (props: UpdateBillProps) => Promise<void>;
    deleteBill: (id: string) => Promise<void>;
}

export const BillCard = (props: BillCardProps) => {
    const { bill, updateBill, deleteBill } = props;
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleUpdate = async ({ id, data }: UpdateBillProps) => {
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
                <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <Droplets color="#3D6493" />- <span>{bill.water} м³</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap color="#F3B923" className="animate-pulse" />-{' '}
                        <span>{bill.electricity} кВт·год</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Flame color="#FBBA74" />- <span>{bill.gas} м³</span>
                    </div>
                </CardContent>
            </Card>

            <UpdateBillModal
                data={{
                    id: bill.id,
                    electricity: bill.electricity,
                    water: bill.water,
                    gas: bill.gas,
                    month: bill.month,
                }}
                handleUpdate={handleUpdate}
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
            />
        </>
    );
};
