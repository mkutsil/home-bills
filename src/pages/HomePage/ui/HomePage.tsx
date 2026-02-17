import { RoutePath } from '@/shared/config/routeConfig/routerPath';
import { Link } from 'react-router';

export const HomePage = () => {
    const billsValue = localStorage.getItem('billsValue');

    const water = billsValue ? JSON.parse(billsValue).water : 'No data';
    const electricity = billsValue ? JSON.parse(billsValue).electricity : 'No data';
    const gas = billsValue ? JSON.parse(billsValue).gas : 'No data';

    return (
        <>
            <h1>показники</h1>

            <p>💧 Water - {water}</p>
            <p>⚡ Electricity - {electricity}</p>
            <p>🔥 Gas - {gas}</p>

            <Link to={RoutePath.add_bills}>
                <p>додати</p>
            </Link>
        </>
    );
};
