import { Bell, House } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { AuthPanel } from '@/features/auth';

export const Navbar = () => (
    <header className="flex justify-between items-center px-5 py-3 bg-accent">
        <div className="flex items-center gap-2">
            <Link to={RoutePath.home}>
                <House />
            </Link>
            <div className="flex flex-col relative">
                <h2 className="text-xl font-bold">HomeBills</h2>
                <p className="text-sm text-muted-foreground">your utility dashboard</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <Bell />
            <AuthPanel />
        </div>
    </header>
);
