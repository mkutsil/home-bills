import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { sidebarItemsList } from '../model/items';
import { Link } from 'react-router';

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`${isCollapsed ? 'w-20' : 'w-64'} bg-accent transition-all duration-300 flex-col flex gap-3.5 items-center`}
        >
            <Button
                onClick={() => setIsCollapsed(prev => !prev)}
                variant="secondary"
                size="icon"
                className="rounded-full"
            >
                <Menu />
            </Button>

            {sidebarItemsList.map(item => (
                <Link to={item.path} key={item.path} className="flex items-center gap-1">
                    <item.Icon />
                    {!isCollapsed && item.text}
                </Link>
            ))}
        </div>
    );
};
