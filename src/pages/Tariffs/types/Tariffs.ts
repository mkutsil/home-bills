export type TariffsType = {
    electricity: number;
    water: number;
    gas: number;
};

export type UpdateTariffsType = {
    data: {
        electricity: string;
        water: string;
        gas: string;
    };
};
