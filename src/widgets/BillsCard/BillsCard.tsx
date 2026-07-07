import { Card } from '@/components/ui/card';
import { Droplets, Flame, Zap } from 'lucide-react';

interface BillsCardProps {
    id: string;
    water: number;
    electricity: number;
    gas: number;
}
export const BillsCard = (props: BillsCardProps) => {
    const { water, electricity, gas, id } = props;
    return (
        <div className="md:w-2xl flex gap-4 my-4" key={id}>
            <Card className="w-1/3 flex flex-col items-center gap-2 bg-[#181818] text-[#F3F3F3]">
                <div className="flex items-center gap-2">
                    <Droplets color="#3D6493" />
                    <p className="text-xl font-bold">Вода</p>
                </div>
                <p className="text-2xl font-bold">{water}</p>
                <p className="text-sm text-muted-foreground">м³ за місяць</p>
            </Card>
            <Card className="w-1/3 flex flex-col items-center gap-2 bg-[#181818] text-[#F3F3F3]">
                <div className="flex items-center gap-2">
                    <Zap color="#F3B923" />

                    <p className="text-xl font-bold">Електроенергія</p>
                </div>
                <p className="text-2xl font-bold">{electricity}</p>
                <p className="text-sm text-muted-foreground">кВт·год за місяць</p>
            </Card>
            <Card className="w-1/3 flex flex-col items-center gap-2 bg-[#181818] text-[#F3F3F3]">
                <div className="flex items-center gap-2">
                    <Flame color="#FBBA74" />

                    <p className="text-xl font-bold">Газ</p>
                </div>
                <p className="text-2xl font-bold">{gas}</p>
                <p className="text-sm text-muted-foreground">м³ за місяць</p>
            </Card>
        </div>
    );
};
