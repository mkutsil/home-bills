import { sidebarItemsList } from '@/shared/config/sidebarItemsList/items';
import { NavLink } from 'react-router-dom';

export const MobileBottomNavbar = () => (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-around mx-auto">
            {sidebarItemsList.map(item => (
                <NavLink
                    to={item.path}
                    key={item.path}
                    className={({ isActive }) =>
                        `flex flex-col items-center py-5 transition-all duration-200 ${!isActive && 'text-muted-foreground hover:text-chart-1'}`
                    }
                >
                    <item.Icon width={34} height={34} />
                    <span className={`transition-all duration-400 text-xs`}>{item.text}</span>
                </NavLink>
            ))}
        </div>
    </div>
);
