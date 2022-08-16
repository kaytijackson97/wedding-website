import { useState } from "react";

const FoodOptions = ({ name, isChild }) => {
    const [restrictions, setRestrictions] = useState('');
    if (isChild) {
        return (
            <>
                <div className={`food-options-[${name}]`} data-qa={`food-options-[${name}]`} >
                    <label>{name}</label>
                    <input type="radio" value='option-1' name={`food-option-[${name}]`} defaultChecked/> Option 1
                    <input type="radio" value='option-2' name={`food-option-[${name}]`}/> Option 2
                    <input type="radio" value='option-kids' name={`food-option-[${name}]`}/> Kids Option
                </div>
                <div data-qa="dietary-restrictions">
                    <label>Please list any allergies or dietary restrictions</label>
                    <textarea value={restrictions} onBlur={(event) => setRestrictions(event.target.value)} />
                </div>
            </>
        );
    }

    return (
        <>
            <div className={`food-options-[${name}]`} data-qa={`food-options-[${name}]`}>
                <label>{name}</label>
                <input type="radio" value='option-1' name={`food-option-[${name}]`} defaultChecked/> Option 1
                <input type="radio" value='option-2' name={`food-option-[${name}]`}/> Option 2
            </div>
            <div data-qa="dietary-restrictions">
                <label>Please list any allergies or dietary restrictions</label>
                <textarea value={restrictions} onBlur={(event) => setRestrictions(event.target.value)} />
            </div>
        </>
    )
};

export default FoodOptions;