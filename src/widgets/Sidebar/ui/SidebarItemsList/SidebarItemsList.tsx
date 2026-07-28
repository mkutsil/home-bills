import { NavLink } from 'react-router';
import { sidebarItemsList } from '../../model/items';

interface SidebarItemsListType {
    isCollapsed: boolean;
    onItemClick?: () => void;
}

export const SidebarItemsList = ({ isCollapsed, onItemClick }: SidebarItemsListType) =>
    sidebarItemsList.map(item => (
        <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
                `flex items-center gap-1 transition-all duration-200 ${!isActive && 'text-muted-foreground hover:text-chart-1'}`
            }
            onClick={onItemClick}
        >
            <item.Icon />
            <span
                className={`
                            overflow-hidden whitespace-nowrap
                            transition-all duration-400
                            ${isCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-40 opacity-100'}
                        `}
            >
                {item.text}
            </span>
        </NavLink>
    ));
