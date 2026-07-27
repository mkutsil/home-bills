import { useState, useEffect } from 'react';

export const useBreakpoint = () => {
    const [breakpoints, setBreakpoints] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isMobileOrTablet: false,
    });

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 768px)');
        const tabletQuery = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
        const desktopQuery = window.matchMedia('(min-width: 1025px)');

        const update = () => {
            const isMobile = mobileQuery.matches;
            const isTablet = tabletQuery.matches;
            const isDesktop = desktopQuery.matches;

            setBreakpoints({
                isMobile,
                isTablet,
                isDesktop,
                isMobileOrTablet: isMobile || isTablet,
            });
        };

        update();

        mobileQuery.addEventListener('change', update);
        tabletQuery.addEventListener('change', update);
        desktopQuery.addEventListener('change', update);

        return () => {
            mobileQuery.removeEventListener('change', update);
            tabletQuery.removeEventListener('change', update);
            desktopQuery.removeEventListener('change', update);
        };
    }, []);

    return breakpoints;
};
