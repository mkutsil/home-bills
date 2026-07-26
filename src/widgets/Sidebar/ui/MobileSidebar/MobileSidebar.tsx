import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Sidebar } from '../Sidebar';

export const MobileSidebar = () => (
    <>
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>

            <SheetContent className="dark" side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    </>
);
