import { Skeleton } from '@/components/ui/skeleton';
import { CardType } from '../model/types/cardItemsType';
import { BillCard } from './BillCard';

interface BillsCardProps {
    id: string;
    water: number;
    electricity: number;
    gas: number;
    waterCost: number;
    electricityCost: number;
    gasCost: number;
}

export const BillsCards = (props: BillsCardProps) => {
    const { water, electricity, gas, id, waterCost, electricityCost, gasCost } = props;
    return (
        <div className="md:w-2xl flex max-md:flex-col gap-4 my-4" key={id}>
            {water ? (
                <>
                    <BillCard usage={water} cost={waterCost} cardType={CardType.WATER} />
                    <BillCard
                        usage={electricity}
                        cost={electricityCost}
                        cardType={CardType.ELECTRICITY}
                    />
                    <BillCard usage={gas} cost={gasCost} cardType={CardType.GAS} />
                </>
            ) : (
                <Skeleton className="md:h-[156px] h-[156px] md:w-[672px] w-[294px]" />
            )}
        </div>
    );
};
