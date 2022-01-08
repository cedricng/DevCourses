import React from "react";
import "./Input.css";

const Input = ({ onchange, value, error, type, placeholder, name }) => {
    return (
        <div className="input__container">
            <input
                onChange={onchange}
                value={value}
                placeholder={placeholder}
                type={type}
                name={name}
                autoComplete="off"
                className={error ? "input input-error" : "input input-no-error"}
            />
            <span className="error">{error}</span>
        </div>
    );
};

export default Input;
