import Welcome from "./Welcome"
import { useState } from "react";

export default function InteractiveWelcome() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => setInputValue(e.target.value)

    return (
        <form>
            <label htmlFor="text">Controlled Forms: </label>
            <input type="text" value={inputValue} onChange={handleChange} />
            <Welcome name={inputValue} />
        </form>
    )
}