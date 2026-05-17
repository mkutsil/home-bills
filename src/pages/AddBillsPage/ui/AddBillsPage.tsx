import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import DeleteButton from '@/shared/ui/DeleteButton/DeleteButton';
import { useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router';
import './AddBillsPage.css';
import Input from '@/shared/ui/Input/Input';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/app/firebase/config';

export const AddBillsPage = () => {
    const billsValue = localStorage.getItem('billsValue');

    const water = billsValue ? JSON.parse(billsValue).water : 'No data';
    const electricity = billsValue ? JSON.parse(billsValue).electricity : 'No data';
    const gas = billsValue ? JSON.parse(billsValue).gas : 'No data';

    const [waterValue, setWaterValue] = useState(water);
    const [electricityValue, setElectricityValue] = useState(electricity);
    const [gasValue, setGasValue] = useState(gas);

    const handleWaterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setWaterValue(Number(e.target.value));
    };

    const handleElectricityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setElectricityValue(Number(e.target.value));
    };

    const handleGasChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGasValue(Number(e.target.value));
    };

    const clearInputValues = () => {
        setWaterValue('');
        setElectricityValue('');
        setGasValue('');
    };

    const handleSaveClick = () => {
        let data = {
            water: waterValue,
            electricity: electricityValue,
            gas: gasValue,
        };
        localStorage.setItem('billsValue', JSON.stringify(data));
        // clearInputValues();

        const billsData = [
            {
                title: 'Water',
                value: data.water,
            },
            {
                title: 'Electricity',
                value: data.electricity,
            },
            {
                title: 'Gas',
                value: data.gas,
            },
        ];

        const create = async () => {
            await addDoc(collection(db, 'bills'), {
                billsData,
                createdAt: Date.now(),
            });
        };

        create();
    };

    const handleDeleteBills = () => {
        localStorage.removeItem('billsValue');
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
            {/* {billsValue && <p>Збережені показники: {billsValue}</p>} */}
            <DeleteButton onClick={handleDeleteBills} />
            <Link to={RoutePath.home}>
                <p>на головну</p>
            </Link>
        </div>
    );
};
