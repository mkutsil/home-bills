import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';
import { RootState } from '@/app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { useEffect, useState } from 'react';
import DeleteButton from '@/shared/ui/DeleteButton/DeleteButton';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Droplets, Flame, House, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Bill = {
    id: string;
    month: string;
    water: number;
    electricity: number;
    gas: number;
    createdAt: number;
};

export const HomePage = () => {
    const [bills, setBills] = useState<Bill[]>([]);

    const count = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBills = async () => {
            const snapshot = await getDocs(collection(db, 'bills'));

            setBills(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Bill[]
            );
        };

        fetchBills();
    }, [bills]);

    const handleDeleteBills = async (id: string) => {
        await deleteDoc(doc(db, 'bills', id));
    };

    return (
        <div className="flex flex-col p-5 bg-[#303030] rounded-2xl">
            <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                    <House />
                    <div className="flex flex-col relative">
                        <h2 className="text-xl font-bold">HomeBills</h2>
                        <p className="text-sm text-muted-foreground">your utility dashboard</p>
                    </div>
                </div>
                <Badge className="relative font-bold text-sm" variant="secondary">
                    Червень 2026
                </Badge>
            </div>
            <hr className="my-4" />
            {bills &&
                bills.map(bill => (
                    <div className="flex gap-4 my-4" key={bill.id}>
                        <Card className="w-1/3 flex flex-col items-center gap-2 bg-[#181818] text-[#F3F3F3]">
                            <Droplets color="#3D6493" />
                            <p> Water</p>
                            <p>{bill.water}</p>
                        </Card>
                        <Card className="w-1/3 flex flex-col items-center gap-2 bg-[#181818] text-[#F3F3F3]">
                            <Zap color="#F3B923" />
                            <p> Electricity</p>
                            <p>{bill.electricity}</p>
                        </Card>
                        <Card className="w-1/3 flex flex-col items-center gap-2 bg-[#181818] text-[#F3F3F3]">
                            <Flame color="#FBBA74" />
                            <p> Gas</p>
                            <p>{bill.gas}</p>
                        </Card>
                    </div>
                ))}

            <Link to={RoutePath.add_bills}>
                <p>дoдати</p>
            </Link>
        </div>
    );
};
