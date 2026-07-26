export enum AppRouters {
    HOME = 'home',
    ADD_BILLS = 'add_bills',
    TARIFFS = 'tariffs',
    BILLS_HISTORY = 'bills_history',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: '/',
    [AppRouters.ADD_BILLS]: '/add-bills',
    [AppRouters.TARIFFS]: '/tariffs',
    [AppRouters.BILLS_HISTORY]: '/bills-history',
    [AppRouters.NOT_FOUND]: '*',
};
