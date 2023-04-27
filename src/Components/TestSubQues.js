/*
This is a Demo page and not to be used in the project
*/

import React, { useState } from 'react'

export default function TestSubQues() {


    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            {selectedOption === "option1" && (
                <input type="text" placeholder="Option 1 selected" />
            )}
            {selectedOption === "option2" && (
                <input type="text" placeholder="Option 2 selected" />
            )}
            {selectedOption === "option3" && (
                <input type="text" placeholder="Option 3 selected" />
            )}
        </div>
    )
}
