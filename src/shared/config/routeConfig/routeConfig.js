import { jsx as _jsx } from "react/jsx-runtime";
import { AddBillsPage } from '../../../pages/AddBillsPage';
import { HomePage } from '../../../pages/HomePage';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { AppRouters, RoutePath } from './routerPath';
export const routerConfig = {
    [AppRouters.HOME]: {
        path: RoutePath.home,
        element: _jsx(HomePage, {}),
    },
    [AppRouters.ADD_BILLS]: {
        path: RoutePath.add_bills,
        element: _jsx(AddBillsPage, {}),
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}),
    },
};
