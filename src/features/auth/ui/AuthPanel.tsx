import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOutUser } from '../api/signOutUser';
import { signInWithGoogle } from '../api/signInWithGoogle';
import { useAuthState } from '../model/useAuthState';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

export const AuthPanel = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const { user, isLoading } = useAuthState();

    const handleSignIn = async () => {
        setIsProcessing(true);
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error('Error signing in:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const handleSignOut = async () => {
        setIsProcessing(true);
        try {
            await signOutUser();
        } catch (error) {
            console.error('Error signing out:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    if (isLoading || isProcessing) {
        return <Skeleton className="h-8 w-8 rounded-full bg-white" />;
    }

    return (
        <div className="flex items-center justify-center">
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Avatar>
                                <AvatarImage
                                    src={user?.photoURL || ''}
                                    alt={user?.displayName || 'User Avatar'}
                                    className="grayscale"
                                />
                                <AvatarFallback>
                                    {user?.displayName?.charAt(0) || 'U'}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>
                                {user?.displayName || 'My Account'}
                            </DropdownMenuLabel>
                            <DropdownMenuLabel>{user?.email || ''}</DropdownMenuLabel>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button variant="secondary" onClick={handleSignIn}>
                    Sign In
                </Button>
            )}
        </div>
    );
};
