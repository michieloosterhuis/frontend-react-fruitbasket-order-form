import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import './App.css';
import FruitCounter from './components/FruitCounter';
import Button from "./components/Button";
import TextInput from "./components/TextInput";


function App() {
    const {handleSubmit, register, formState: {errors}, watch } = useForm( {
        mode: "onChange",
        defaultValues: {
            comment: "Haai!"
        }
    });

    const initialState = {
        strawberry: 0,
        apple: 0,
        banana: 0,
        kiwi: 0
    }
    const [count, setCount] = useState(initialState);

    const selectedReferrer = watch("delivery-frequency");

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

    console.log("ERRORS", errors);

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

                {selectedReferrer === "monthly" &&
                    <label htmlFor="check"><input type="checkbox" id="check"/>Conditionele check</label>
                }

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
                    {...register("comment", {
                        minLength: {
                            value: 3,
                            message: "te kort"
                        },
                        maxLength: {
                            value: 6,
                            message: "te lang"
                        },
                    })}
                >
                </textarea>
                {errors.comment && <span>{errors.comment.message}</span>}

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
