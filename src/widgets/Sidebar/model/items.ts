import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { House, FolderClock, FolderPlus, Receipt } from 'lucide-react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.home,
        text: 'Home',
        Icon: House,
    },
    {
        path: RoutePath.bills_history,
        text: 'Bills history',
        Icon: FolderClock,
    },
    {
        path: RoutePath.add_bills,
        text: 'Add bill',
        Icon: FolderPlus,
    },

    {
        path: RoutePath.tariffs,
        text: 'Tariffs',
        Icon: Receipt,
    },
];
