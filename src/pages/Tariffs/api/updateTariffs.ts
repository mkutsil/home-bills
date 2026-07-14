import { db } from '@/app/firebase/config';
import { doc, setDoc } from 'firebase/firestore';

interface updateTariffsType {
    data: {
        water: string;
        electricity: string;
        gas: string;
    };
}

export const updateTariffs = async (props: updateTariffsType) => {
    const { data } = props;
    await setDoc(doc(db, 'tariffs', 'default'), {
        electricity: data.electricity,
        gas: data.gas,
        water: data.water,
    });
};
