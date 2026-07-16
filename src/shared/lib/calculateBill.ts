import { Bill } from '@/pages/HomePage/types/Bill';
import { TariffsType } from '@/pages/Tariffs/types/Tariffs';

export type BillCalculation = {
    electricity: {
        usage: number;
        cost: number;
    };
    water: {
        usage: number;
        cost: number;
    };
    gas: {
        usage: number;
        cost: number;
    };
    total: number;
};

export const calculateBill = (
    current: Bill,
    previous: Bill,
    tariffs: TariffsType
): BillCalculation => {
    const electricityUsage = current.electricity - previous.electricity;

    const waterUsage = current.water - previous.water;

    const gasUsage = current.gas - previous.gas;
    return {
        electricity: {
            usage: electricityUsage,
            cost: electricityUsage * tariffs.electricity,
        },
        water: {
            usage: waterUsage,
            cost: waterUsage * tariffs.water,
        },
        gas: {
            usage: gasUsage,
            cost: gasUsage * tariffs.gas,
        },
        total:
            electricityUsage * tariffs.electricity +
            waterUsage * tariffs.water +
            gasUsage * tariffs.gas,
    };
};
