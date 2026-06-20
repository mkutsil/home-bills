import { jsx as _jsx } from "react/jsx-runtime";
import { routerConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
const AppRouter = () => {
    const renderWithWrapper = useCallback((route) => {
        const element = _jsx(Suspense, { fallback: _jsx("h1", { children: "Loading..." }), children: route.element });
        return _jsx(Route, { path: route.path, element: element }, route.path);
    }, []);
    return _jsx(Routes, { children: Object.values(routerConfig).map(renderWithWrapper) });
};
export default memo(AppRouter);
