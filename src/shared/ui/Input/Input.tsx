import { InputHTMLAttributes, ChangeEvent } from 'react';
import './Input.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    placeholder: string;
    value?: string | number;
    onChange?: (value: string) => void;
    isRequired?: boolean;
    type?: string;
    customClassNames?: string;
    error?: string;
    isViewMode?: boolean;
}

const Input = (props: InputProps) => {
    const {
        placeholder,
        value,
        onChange,
        isRequired = true,
        type = 'text',
        customClassNames,
        error,
        isViewMode = false,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={`textField ${isViewMode ? 'viewMode' : ''} ${customClassNames || ''}`}>
            <input
                className="input"
                value={value || ''}
                onChange={onChangeHandler}
                type={type}
                required={isRequired}
                {...otherProps}
            />

            <label className="placeholder">{placeholder}</label>

            {error && <span className="error">{error}</span>}
        </div>
    );
};

export default Input;
