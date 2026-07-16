import { Droplets, Zap, Flame } from 'lucide-react';
import { CardItemsType } from './types/cardItemsType';

export const cardItems: CardItemsType = {
    water: { title: 'Вода', icon: <Droplets color="#3D6493" />, description: 'м³ за місяць' },
    electricity: {
        title: 'Електроенергія',
        icon: <Zap color="#F3B923" />,
        description: 'кВт·год за місяць',
    },
    gas: { title: 'Газ', icon: <Flame color="#FBBA74" />, description: 'м³ за місяць' },
};
