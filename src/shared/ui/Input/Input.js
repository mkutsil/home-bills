var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Input.css';
const Input = (props) => {
    const { placeholder, value, onChange, isRequired = true, type = 'text', customClassNames, error, isViewMode = false } = props, otherProps = __rest(props, ["placeholder", "value", "onChange", "isRequired", "type", "customClassNames", "error", "isViewMode"]);
    const onChangeHandler = (e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    return (_jsxs("div", { className: `textField ${isViewMode ? 'viewMode' : ''} ${customClassNames || ''}`, children: [_jsx("input", Object.assign({ className: "input", value: value || '', onChange: onChangeHandler, type: type, required: isRequired }, otherProps)), _jsx("label", { className: "placeholder", children: placeholder }), error && _jsx("span", { className: "error", children: error })] }));
};
export default Input;
