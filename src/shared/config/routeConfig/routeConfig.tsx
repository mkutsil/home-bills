import { AddBillsPage } from '../../../pages/AddBillsPage';
import { HomePage } from '../../../pages/HomePage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import type { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRouters {
    HOME = 'home',
    ADD_BILLS = 'add_bills',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.ADD_BILLS]: '/add-bills',
    [AppRouters.NOT_FOUND]: '*',
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
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
