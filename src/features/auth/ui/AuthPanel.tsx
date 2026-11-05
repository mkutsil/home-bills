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
import { useState } from 'react';
export const AuthPanel = () => {
    const [userState, setUserState] = useState<any>(null);
    const handleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            console.log('Signed in user:', user);
            setUserState(user);
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOutUser();
            setUserState(null);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div>
            {userState ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage
                                src={userState?.photoURL}
                                alt="@shadcn"
                                className="grayscale"
                            />
                            <AvatarFallback>?</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Team</DropdownMenuItem>
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
