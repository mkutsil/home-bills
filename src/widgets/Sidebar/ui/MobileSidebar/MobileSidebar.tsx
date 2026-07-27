import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { SidebarItemsList } from '../SidebarItemsList/SidebarItemsList';

export const MobileSidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>

            <SheetContent className="dark p-5" side="left">
                <SidebarItemsList isCollapsed={false} onItemClick={() => setOpen(false)} />
            </SheetContent>
        </Sheet>
    );
};
