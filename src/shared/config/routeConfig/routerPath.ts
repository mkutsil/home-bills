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
