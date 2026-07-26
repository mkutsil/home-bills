import { AddBillsPage } from '../../../pages/AddBillsPage';
import { HomePage } from '../../../pages/HomePage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import type { RouteProps } from 'react-router-dom';
import { AppRouters, RoutePath } from './routerPath';
import { Tariffs } from '@/pages/Tariffs/ui/Tariffs';
import { BillsHistoryPage } from '@/pages/BillsHistoryPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routerConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRouters.ADD_BILLS]: {
        path: RoutePath.add_bills,
        element: <AddBillsPage />,
    },
    [AppRouters.TARIFFS]: {
        path: RoutePath.tariffs,
        element: <Tariffs />,
    },
    [AppRouters.BILLS_HISTORY]: {
        path: RoutePath.bills_history,
        element: <BillsHistoryPage />,
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
