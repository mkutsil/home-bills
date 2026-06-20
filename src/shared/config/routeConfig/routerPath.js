export var AppRouters;
(function (AppRouters) {
    AppRouters["HOME"] = "home";
    AppRouters["ADD_BILLS"] = "add_bills";
    AppRouters["NOT_FOUND"] = "not_found";
})(AppRouters || (AppRouters = {}));
export const RoutePath = {
    [AppRouters.HOME]: '/',
    [AppRouters.ADD_BILLS]: '/add-bills',
    [AppRouters.NOT_FOUND]: '*',
};
