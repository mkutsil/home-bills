import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import { AppRouter } from './providers/router';
function App() {
    return (_jsx(_Fragment, { children: _jsx(AppRouter, {}) }));
}
export default App;
