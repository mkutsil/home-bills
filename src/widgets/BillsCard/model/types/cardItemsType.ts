export const enum CardType {
    WATER = 'water',
    ELECTRICITY = 'electricity',
    GAS = 'gas',
}

type CardItemType = {
    title: string;
    icon: React.ReactNode;
    description: string;
};
export type CardItemsType = {
    water: CardItemType;
    electricity: CardItemType;
    gas: CardItemType;
};
