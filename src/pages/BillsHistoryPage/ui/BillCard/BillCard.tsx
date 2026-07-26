import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bill } from '../../types/Bill';

interface BillCardProps {
    bill: Bill;
}

export const BillCard = (props: BillCardProps) => {
    const { bill } = props;
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
            </CardHeader>
            <CardContent>
                <p>Вода : {bill.water}</p>
                <p>Електроенергія : {bill.electricity}</p>
                <p>Газ : {bill.gas}</p>
            </CardContent>
        </Card>
    );
};
