import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';
import './HomePage.css';
import { RootState } from '@/app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/features/counter/slice/counterSlice';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { useEffect } from 'react';

export const HomePage = () => {
    let water, electricity, gas;

    const count = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchBills = async () => {
            const snapshot = await getDocs(collection(db, 'bills'));

            const bills = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log(bills);

            bills[0].billsData.forEach((bill: { title: string; value: number }) => {
                if (bill.title === 'Water') {
                    water = bill.value;
                } else if (bill.title === 'Electricity') {
                    electricity = bill.value;
                } else if (bill.title === 'Gas') {
                    gas = bill.value;
                }
            });
        };

        fetchBills();
    }, []);
    return (
        <div className="home-page-container">
            <h1>показники</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>

            <button onClick={() => dispatch(decrement())}>-</button>
            <p>💧 Water - {water}</p>
            <p>⚡ Electricity - {electricity}</p>
            <p>🔥 Gas - {gas}</p>

            <Link to={RoutePath.add_bills}>
                <p>дoдати</p>
            </Link>
        </div>
    );
};
