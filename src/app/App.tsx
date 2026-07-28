import { Navbar } from '@/widgets/Navbar';
import './App.css';
import { AppRouter } from './providers/router';
import { Sidebar } from '@/widgets/Sidebar';
const App = () => (
    <div className="dark">
        <div className="flex h-screen flex-col">
            <Navbar />

            <div className="flex flex-1">
                <div className="max-sm:hidden">
                    <Sidebar />
                </div>

                <div className="flex-1">
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
    </div>
);

export default App;
