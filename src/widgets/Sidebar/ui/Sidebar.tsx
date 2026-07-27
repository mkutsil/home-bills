import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint/useBreakpoint';
import { SidebarItemsList } from './SidebarItemsList/SidebarItemsList';

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { isMobileOrTablet } = useBreakpoint();

    useEffect(() => {
        setIsCollapsed(isMobileOrTablet);
    }, [isMobileOrTablet]);
    return (
        <div
            className={`${isCollapsed ? 'w-20 items-center' : 'md:w-64 md:px-3.5'} bg-accent transition-all duration-600 flex-col flex gap-3.5 h-full`}
        >
            <Button
                onClick={() => setIsCollapsed(prev => !prev)}
                variant="secondary"
                size="icon"
                className="rounded-full"
            >
                <Menu />
            </Button>
            <SidebarItemsList isCollapsed={isCollapsed} />
        </div>
    );
};
