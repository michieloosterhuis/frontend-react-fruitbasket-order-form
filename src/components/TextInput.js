import React from "react";

function TextInput({ label, id, name, type, register}) {
    return (
        <label className="text-input" htmlFor={id}>
            {label}
            <input
                id={id}
                name={name}
                type={type}
                {...register(name)}
            />
        </label>
    )
}

export default TextInput;