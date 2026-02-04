import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import DeleteButton from '@/shared/ui/DeleteButton/DeleteButton';
import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router';

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

    const handleSaveClick = () => {
        let data = {
            water: waterValue,
            electricity: electricityValue,
            gas: gasValue,
        };
        localStorage.setItem('billsValue', JSON.stringify(data));

        // setBillsValue(inputValue);
        // setBillsValue(inputValue);
        // handleWaterChange(0);
        // localStorage.setItem('billsValue', inputValue);
    };

    const handleDeleteBills = () => {
        localStorage.removeItem('billsValue');
    };

    // 💧 Water ⚡ Electricity 🔥 Gas
    return (
        <>
            <h1>Введіть показники лічильника</h1>
            <p>Світло</p>
            <input type="number" value={waterValue} onChange={handleWaterChange} />
            <p>Газ</p>
            <input type="number" value={electricityValue} onChange={handleElectricityChange} />
            <p>Вода</p>
            <input type="number" value={gasValue} onChange={handleGasChange} />
            <button onClick={handleSaveClick}>Зберегти</button>
            {/* {billsValue && <p>Збережені показники: {billsValue}</p>} */}
            <DeleteButton onClick={handleDeleteBills} />
            <Link to={RoutePath.home}>
                <p>на головну</p>
            </Link>
        </>
    );
};
