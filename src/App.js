import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import FruitCounter from './components/FruitCounter';
import Button from "./components/Button";
import TextInput from "./components/TextInput";


function App() {
    const { handleSubmit, register } = useForm();
    const initialState = {
        strawberry: 0,
        apple: 0,
        banana: 0,
        kiwi: 0
    }
    const [count, setCount] = useState(initialState);

    function decrementCount(event) {
        const name = event.target.name;
        setCount((prevCount) => {
            const newCount = Math.max(0, prevCount[name] - 1);
            return ({...prevCount, [name]: newCount});
        });
    }

    function incrementCount(event) {
        const name = event.target.name;
        setCount((prevCount) => {
            const newCount = prevCount[name] + 1;
            return ({...prevCount, [name]: newCount});
        });
    }

    function resetAllCounters() {
        setCount({...initialState});
    }

    function submitForm(data) {
        console.log(count)
        console.log(data)
    }

    return (
        <main>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-counters">
                <FruitCounter
                    icon="🍓"
                    title="Aardbeien"
                    name="strawberry"
                    count={count.strawberry}
                    decrement={decrementCount}
                    increment={incrementCount}
                />

                <FruitCounter
                    icon="🍎"
                    title="Appels"
                    name="apple"
                    count={count.apple}
                    decrement={decrementCount}
                    increment={incrementCount}
                />

                <FruitCounter
                    icon="🍌"
                    title="Bananen"
                    name="banana"
                    count={count.banana}
                    decrement={decrementCount}
                    increment={incrementCount}
                />

                <FruitCounter
                    icon="🥝"
                    title="Kiwi"
                    name="kiwi"
                    count={count.kiwi}
                    decrement={decrementCount}
                    increment={incrementCount}
                />

                <Button
                    type="button"
                    text="Reset"
                    onClick={resetAllCounters}
                />

            </div>
            <form className="order-form" onSubmit={handleSubmit(submitForm)}>
                <TextInput
                    label="Voornaam"
                    id="first-name"
                    name="first-name"
                    type="text"
                    register={register}
                />

                <TextInput
                    label="Achternaam"
                    id="last-name"
                    name="last-name"
                    type="text"
                    register={register}
                />

                <TextInput
                    label="Leeftijd"
                    id="age"
                    name="age"
                    type="text"
                    register={register}
                />

                <TextInput
                    label="Postcode"
                    id="zip-code"
                    name="zip-code"
                    type="text"
                    register={register}
                />

                <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                <select
                    id="delivery-frequency"
                    name="delivery-frequency"
                    {...register("delivery-frequency")}
                >
                    <option value="weekly">Iedere week</option>
                    <option value="bi-weekly">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>

                <div>
                    <label htmlFor="day">
                        <input
                            id="day"
                            type="radio"
                            name="delivery-moment"
                            value="day"
                            checked
                            {...register("delivery-moment")}
                        />
                        Overdag
                    </label>

                    <label htmlFor="day">
                        <input
                            id="evening"
                            type="radio"
                            name="delivery-moment"
                            value="evening"
                            {...register("delivery-moment")}
                        />
                        's Avonds
                    </label>
                </div>

                <label htmlFor="comment">Opmerking</label>
                <textarea
                    id="comment"
                    name="comment"
                    {...register("comment")}
                >
                    </textarea>

                <label htmlFor="accept-terms">
                    <input
                        id="accept-terms"
                        type="checkbox"
                        {...register("accept-terms")}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <Button
                    type="submit"
                    text="Verzend"
                />
            </form>
        </main>
    );
}

export default App;
