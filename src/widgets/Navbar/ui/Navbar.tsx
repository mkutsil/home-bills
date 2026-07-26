import { Bell, House } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MobileSidebar } from '@/widgets/Sidebar';

export const Navbar = () => (
    <header className="flex justify-between items-center px-5 py-3">
        <div className="flex items-center gap-2">
            <div className="sm:hidden block">
                <MobileSidebar />
            </div>
            <House />
            <div className="flex flex-col relative">
                <h2 className="text-xl font-bold">HomeBills</h2>
                <p className="text-sm text-muted-foreground">your utility dashboard</p>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <Bell />

            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </header>
);
