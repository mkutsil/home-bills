import { useState, ChangeEvent } from 'react';

export const AddBillsPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [billsValue, setBillsValue] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSaveClick = () => {
        setBillsValue(inputValue);
        setInputValue('');
        localStorage.setItem('billsValue', inputValue);
    };
    return (
        <>
            <h1>Введіть показники лічильника</h1>
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSaveClick}>Зберегти</button>
            {billsValue && <p>Збережені показники: {billsValue}</p>}
        </>
    );
};
