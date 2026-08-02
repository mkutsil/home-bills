import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bill } from '../../types/Bill';
import { PencilIcon, ShareIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface BillCardProps {
    bill: Bill;
    updateBill: (props: {
        id: string;
        data: Omit<Bill, 'id' | 'month' | 'createdAt'>;
    }) => Promise<void>;
    deleteBill: (id: string) => Promise<void>;
}

export const BillCard = (props: BillCardProps) => {
    const { bill, updateBill, deleteBill } = props;

    const handleEdit = () => {
        updateBill({
            id: bill.id,
            data: { water: bill.water, electricity: bill.electricity, gas: bill.gas },
        });
    };

    const handleDelete = () => {
        deleteBill(bill.id);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {bill &&
                        new Date(bill.month).toLocaleString('uk-UA', {
                            month: 'long',
                            year: 'numeric',
                        })}
                </CardTitle>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Actions</Button>
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
    );
};
