import { signInWithPopup } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
import { googleProvider } from '@/app/firebase/googleProvider';

export const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);

    return result.user;
};
