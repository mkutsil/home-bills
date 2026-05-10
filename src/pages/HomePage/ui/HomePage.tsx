import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';
import './HomePage.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { useEffect } from 'react';
import { RootState } from '@/app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/features/counter/slice/counterSlice';

export const HomePage = async () => {
    const billsValue = localStorage.getItem('billsValue');

    const water = billsValue ? JSON.parse(billsValue).water : 'No data';
    const electricity = billsValue ? JSON.parse(billsValue).electricity : 'No data';
    const gas = billsValue ? JSON.parse(billsValue).gas : 'No data';

    const billsData = [
        {
            title: 'Water',
            value: water,
        },
        {
            title: 'Electricity',
            value: electricity,
        },
        {
            title: 'Gas',
            value: gas,
        },
    ];
    useEffect(() => {
        const create = async () => {
            await addDoc(collection(db, 'bills'), {
                billsData,
                createdAt: Date.now(),
            });
        };

        create();
    }, [water, electricity, gas]);

    const count = useSelector((state: RootState) => state.counter.value);

    const dispatch = useDispatch();
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
