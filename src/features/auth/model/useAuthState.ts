import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';

import { auth } from '@/app/firebase/config';

export const useAuthState = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    return { user, isLoading };
};
