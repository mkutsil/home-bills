import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';
import { Card } from '@/components/ui/card';
import { House, TrendingDown, Wallet } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BillsCard } from '@/widgets/BillsCard/BillsCard';
import { Bill } from '../../types/Bill';
import { BillCalculation } from '@/shared/lib/calculateBill';

interface HomeCardProps {
    bill: Bill;
    calculateBill: BillCalculation | null;
}

export const HomeCard = (props: HomeCardProps) => {
    const { bill, calculateBill } = props;
    return (
        <div className="flex flex-col p-5 bg-[#303030] rounded-2xl">
            <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                    <House />
                    <div className="flex flex-col relative">
                        <h2 className="text-xl font-bold">HomeBills</h2>
                        <p className="text-sm text-muted-foreground">your utility dashboard</p>
                    </div>
                </div>
                <Badge className="relative font-bold text-sm" variant="secondary">
                    {bill &&
                        new Date(bill.createdAt).toLocaleString('uk-UA', {
                            month: 'long',
                            year: 'numeric',
                        })}
                </Badge>
            </div>
            <hr className="my-4" />
            {bill && (
                <BillsCard
                    id={bill.id}
                    water={calculateBill?.water.usage || 0}
                    electricity={calculateBill?.electricity.usage || 0}
                    gas={calculateBill?.gas.usage || 0}
                />
            )}

            <Card className="w-full flex flex-col gap-4 p-4 bg-[#181818] text-[#F3F3F3]">
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <Wallet color="#3EB369" />
                    </div>
                    <p>{calculateBill?.total} грн</p>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <div>
                        <TrendingDown color="#53B559" />
                        {/* <TrendingUp color="red" /> */}
                    </div>
                    <p>-58 грн</p>
                </div>
            </Card>

            <Link to={RoutePath.add_bills}>
                <Button className="mt-5">Add Bills</Button>
            </Link>
        </div>
    );
};
