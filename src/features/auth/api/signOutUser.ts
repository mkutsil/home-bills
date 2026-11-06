import { signOut } from 'firebase/auth';

import { auth } from '@/app/firebase/config';

export const signOutUser = async () => {
    await signOut(auth);
};
