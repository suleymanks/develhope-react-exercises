import {useState} from 'react';

export default function TodoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("")

    function addTodos() {
        if(inputValue !== "") {
        setItems([...items, inputValue])
        }
        setInputValue("");
    }

    return (
        <div>
            <h2>Todo List Exercise</h2>
            <input 
            type="text" 
            onChange={(e) => setInputValue(e.target.value)} 
            value={inputValue}
            required
            />
            <br />
            <button onClick={addTodos}>Add</button>
            <button onClick={()=> setItems([])}>Reset</button>
            <ul>
                {items.map((element, index) =>(
                    <li key={index}>
                        {element}
                    </li>
                ))}
            </ul>
        </div>
    )
}