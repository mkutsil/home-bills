import { Link } from 'react-router';
import { sidebarItemsList } from '../../model/items';

interface SidebarItemsListType {
    isCollapsed: boolean;
    onItemClick?: () => void;
}

export const SidebarItemsList = ({ isCollapsed, onItemClick }: SidebarItemsListType) =>
    sidebarItemsList.map(item => (
        <Link
            to={item.path}
            key={item.path}
            className="flex items-center gap-1"
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
        </Link>
    ));
