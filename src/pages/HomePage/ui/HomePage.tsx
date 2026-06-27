import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';
import './HomePage.css';
import { RootState } from '@/app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/features/counter/slice/counterSlice';
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
        <div className="home-page-container">
            <h1>показники</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>

            <button onClick={() => dispatch(decrement())}>-</button>
            {bills &&
                bills.map(bill => (
                    <Card className="w-lg mb-4" key={bill.id}>
                        <CardHeader>
                            <CardTitle>
                                {new Date(bill.createdAt).toLocaleString('uk-UA')}
                            </CardTitle>
                            <CardDescription>Bills</CardDescription>
                            <CardAction>
                                <DeleteButton onClick={() => handleDeleteBills(bill.id)} />
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <p>💧 Water - {bill.water}</p>
                            <p>⚡ Electricity - {bill.electricity}</p>
                            <p>🔥 Gas - {bill.gas}</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                ))}

            <Link to={RoutePath.add_bills}>
                <p>дoдати</p>
            </Link>
        </div>
    );
};
