import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { useState } from 'react';
import { Link } from 'react-router';
import './AddBillsPage.css';
import Input from '@/shared/ui/Input/Input';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';

export const AddBillsPage = () => {
    const [waterValue, setWaterValue] = useState('');
    const [electricityValue, setElectricityValue] = useState('');
    const [gasValue, setGasValue] = useState('');

    const clearInputValues = () => {
        setWaterValue('');
        setElectricityValue('');
        setGasValue('');
    };

    const handleSaveClick = () => {
        const create = async () => {
            const now = new Date();

            const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

            await addDoc(collection(db, 'bills'), {
                month,
                water: Number(waterValue),
                electricity: Number(electricityValue),
                gas: Number(gasValue),
                createdAt: Date.now(),
            });
        };

        create();
        clearInputValues();
    };

    // 💧 Water ⚡ Electricity 🔥 Gas
    return (
        <div className="add-bills-page-container">
            <h1>Введіть показники лічильника</h1>

            <Input
                placeholder="⚡ Electricity"
                onChange={setElectricityValue}
                value={electricityValue}
            />
            <Input placeholder="🔥 Gas" onChange={setGasValue} value={gasValue} />
            <Input placeholder="💧 Water" onChange={setWaterValue} value={waterValue} />

            <button onClick={handleSaveClick}>Зберегти</button>
            <Link to={RoutePath.home}>
                <p>на головну</p>
            </Link>
        </div>
    );
};
