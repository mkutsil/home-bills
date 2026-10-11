import { Bill } from '@/features/manageBill';
import { BillCalculation } from '@/shared/lib/calculateBill';
import { compareBillsType } from '@/shared/lib/compareBills';
import { BillCard, BillsCards } from '@/widgets/BillsCard';
import EmblaCarousel from './EmbalaCarousel/EmbalaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { CardType } from '@/widgets/BillsCard/model/types/cardItemsType';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router';
import { TrendingDown, Wallet, TrendingUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { RoutePath } from '@/shared/config/routeConfig/routerPath';
interface HomeCardProps {
    bill: Bill;
    calculateBill: BillCalculation | null;
    compareBills: compareBillsType | null;
}
export const HomeCard = (props: HomeCardProps) => {
    const { bill, calculateBill, compareBills } = props;
    const OPTIONS: EmblaOptionsType = {
        loop: true,
        align: 'center',
        containScroll: false,
    };

    return (
        <div className="bg-red w-full md:mx-auto px-5 my-5">
            <Card className="flex flex-col p-5 xl:w-max w-160 max-md:w-full mx-auto rounded-2xl">
                <Badge className="relative font-bold text-sm" variant="secondary">
                    {bill &&
                        new Date(bill.createdAt).toLocaleString('uk-UA', {
                            month: 'long',
                            year: 'numeric',
                        })}
                </Badge>

                <hr className="my-4" />
                <div className="md:hidden block">
                    <EmblaCarousel options={OPTIONS}>
                        {[
                            <BillCard
                                key="water"
                                usage={calculateBill?.water.usage || 0}
                                cost={calculateBill?.water.cost || 0}
                                cardType={CardType.WATER}
                            />,
                            <BillCard
                                key="electricity"
                                usage={calculateBill?.electricity.usage || 0}
                                cost={calculateBill?.electricity.cost || 0}
                                cardType={CardType.ELECTRICITY}
                            />,
                            <BillCard
                                key="gas"
                                usage={calculateBill?.gas.usage || 0}
                                cost={calculateBill?.gas.cost || 0}
                                cardType={CardType.GAS}
                            />,
                        ]}
                    </EmblaCarousel>
                </div>

                <div className="md:flex hidden gap-2">
                    <BillsCards
                        id={bill?.id}
                        water={calculateBill?.water.usage || 0}
                        electricity={calculateBill?.electricity.usage || 0}
                        gas={calculateBill?.gas.usage || 0}
                        waterCost={calculateBill?.water.cost || 0}
                        electricityCost={calculateBill?.electricity.cost || 0}
                        gasCost={calculateBill?.gas.cost || 0}
                    />
                </div>

                <Card className="w-full flex flex-col gap-4 p-4 bg-[#181818] text-[#F3F3F3]">
                    <div className="flex items-center justify-between gap-2">
                        <div>
                            <Wallet color="#3EB369" />
                        </div>
                        {calculateBill?.total ? (
                            <p>{calculateBill?.total} грн</p>
                        ) : (
                            <Skeleton className="h-5 w-[49px]" />
                        )}
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <div>
                            {compareBills?.isMore ? (
                                <TrendingUp color="red" />
                            ) : (
                                <TrendingDown color="#53B559" />
                            )}
                        </div>
                        {compareBills?.difference ? (
                            <p>{compareBills?.difference} грн</p>
                        ) : (
                            <Skeleton className="h-5 w-12.25" />
                        )}
                    </div>
                </Card>

                <Link to={RoutePath.add_bills}>
                    <Button className="mt-5">Add Bills</Button>
                </Link>
            </Card>
        </div>
    );
};
