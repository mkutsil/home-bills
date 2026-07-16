import { BillCalculation } from './calculateBill';

export type compareBillsType = {
    difference: number;
    isMore: boolean;
    percent: number;
};

export const compareBills = (
    current: BillCalculation,
    previous: BillCalculation
): compareBillsType => ({
    difference: current.total - previous.total,
    isMore: current.total > previous.total,
    percent: previous.total === 0 ? 0 : ((current.total - previous.total) / previous.total) * 100,
});
