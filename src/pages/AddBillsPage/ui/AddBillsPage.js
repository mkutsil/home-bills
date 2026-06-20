import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "add-bills-page-container", children: [_jsx("h1", { children: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u043D\u0438\u043A\u0438 \u043B\u0456\u0447\u0438\u043B\u044C\u043D\u0438\u043A\u0430" }), _jsx(Input, { placeholder: "\u26A1 Electricity", onChange: setElectricityValue, value: electricityValue }), _jsx(Input, { placeholder: "\uD83D\uDD25 Gas", onChange: setGasValue, value: gasValue }), _jsx(Input, { placeholder: "\uD83D\uDCA7 Water", onChange: setWaterValue, value: waterValue }), _jsx("button", { onClick: handleSaveClick, children: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438" }), _jsx(Link, { to: RoutePath.home, children: _jsx("p", { children: "\u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443" }) })] }));
};
