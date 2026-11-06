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
export const AuthPanel = () => {
    const { user, setUser, isLoading, setIsLoading } = useAuthState();

    const handleSignIn = async () => {
        setIsLoading(true);
        try {
            const userData = await signInWithGoogle();
            setUser(userData);
        } catch (error) {
            console.error('Error signing in:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignOut = async () => {
        setIsLoading(true);
        try {
            await signOutUser();
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Skeleton className="h-8 w-8 rounded-full bg-white" />;
    }

    return (
        <div>
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage
                                src={user?.photoURL || ''}
                                alt="@shadcn"
                                className="grayscale"
                            />
                            <AvatarFallback>?</AvatarFallback>
                        </Avatar>
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
