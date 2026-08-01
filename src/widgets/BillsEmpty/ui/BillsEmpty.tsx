import { Button } from '@/components/ui/button';
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { Folder } from 'lucide-react';
import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';

export const BillsEmpty = () => (
    <>
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Folder />
                </EmptyMedia>
                <EmptyTitle>No Bills Yet</EmptyTitle>
                <EmptyDescription>
                    You haven&apos;t created any bills yet. Get started by creating your first bill.
                    It&apos;s quick and easy!
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center gap-2">
                <Link to={RoutePath.add_bills}>
                    <Button>Add Bills</Button>
                </Link>
            </EmptyContent>
        </Empty>
    </>
);
