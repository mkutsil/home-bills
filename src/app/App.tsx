import { Navbar } from '@/widgets/Navbar';
import './App.css';
import { AppRouter } from './providers/router';
import { Sidebar } from '@/widgets/Sidebar';
import { Toaster } from '@/components/ui/sonner';

const App = () => (
    <div className="dark">
        <div className="flex h-screen flex-col">
            <Navbar />

            <div className="flex flex-1">
                <div className="max-sm:hidden">
                    <Sidebar />
                </div>

                <div className="flex-1 my-5 justify-center flex h-max">
                    <AppRouter />
                </div>
            </div>
        </div>

        <div className="sky-container">
            {Array.from({ length: 10 }).map((_, i) => (
                <span
                    key={i}
                    className="star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 30}s`,
                    }}
                />
            ))}
        </div>

        <Toaster />
    </div>
);

export default App;
