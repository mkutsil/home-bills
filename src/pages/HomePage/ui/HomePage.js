import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';
import './HomePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/features/counter/slice/counterSlice';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { useEffect, useState } from 'react';
import DeleteButton from '@/shared/ui/DeleteButton/DeleteButton';
export const HomePage = () => {
    const [bills, setBills] = useState([]);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchBills = async () => {
            const snapshot = await getDocs(collection(db, 'bills'));
            setBills(snapshot.docs.map(doc => (Object.assign({ id: doc.id }, doc.data()))));
        };
        fetchBills();
    }, [bills]);
    const handleDeleteBills = async (id) => {
        await deleteDoc(doc(db, 'bills', id));
    };
    return (_jsxs("div", { className: "home-page-container", children: [_jsx("h1", { children: "\u043F\u043E\u043A\u0430\u0437\u043D\u0438\u043A\u0438" }), _jsx("h2", { children: count }), _jsx("button", { onClick: () => dispatch(increment()), children: "+" }), _jsx("button", { onClick: () => dispatch(decrement()), children: "-" }), bills &&
                bills.map(bill => (_jsxs("div", { children: [_jsxs("p", { children: ["\uD83D\uDCA7 Water - ", bill.water] }), _jsxs("p", { children: ["\u26A1 Electricity - ", bill.electricity] }), _jsxs("p", { children: ["\uD83D\uDD25 Gas - ", bill.gas] }), _jsx("p", { children: new Date(bill.createdAt).toLocaleString('uk-UA') }), _jsx(DeleteButton, { onClick: () => handleDeleteBills(bill.id) })] }, bill.id))), _jsx(Link, { to: RoutePath.add_bills, children: _jsx("p", { children: "\u0434o\u0434\u0430\u0442\u0438" }) })] }));
};
