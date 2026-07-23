import { Card } from '@/components/ui/card';
import { cardItems } from '../model/cardItems';
import { CardType } from '../model/types/cardItemsType';

interface BillCardProps {
    usage: number;
    cost: number;
    cardType: CardType;
}
export const BillCard = (props: BillCardProps) => {
    const { usage, cost, cardType = CardType.WATER } = props;
    const { title, icon, description } = cardItems[cardType];
    return (
        <Card className="md:w-1/3 flex flex-col items-center gap-2 bg-[#181818] text-[#F3F3F3]">
            <div className="flex items-center gap-2">
                {icon}
                <p className="text-xl font-bold">{title}</p>
            </div>
            <p className="text-2xl font-bold">{usage}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
            <p className="text-sm text-muted-foreground">{cost} грн</p>
        </Card>
    );
};
