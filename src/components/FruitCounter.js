import React from "react";

function FruitCounter({ icon, title, name, count, decrement, increment }) {
    return (
        <div className={count === 0 ? "fruit-counter" : "fruit-counter highlighted-background"}>
            <div>
                <span>{icon}</span>
                <span>{title}</span>
            </div>
            <div>
                <input
                    type="button"
                    value="-"
                    name={name}
                    onClick={decrement}
                />
                <span>{count}</span>
                <input
                    type="button"
                    value="+"
                    name={name}
                    onClick={increment}
                />
            </div>
        </div>

    )
}

export default FruitCounter;