import './App.css';
import { AppRouter } from './providers/router';
const App = () => (
    <div className="dark">
        <AppRouter />
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
