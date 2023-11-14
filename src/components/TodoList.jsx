import { useState } from 'react';
import styles from './TodoList.module.css'; // Adjust the path based on your project structure

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodos() {
    if (inputValue !== "") {
      setItems([...items, inputValue]);
    }
    setInputValue("");
  }

  function removeItem(index) {
    setItems((prevItems) => {
      const newItems = prevItems.filter((_, i) => i !== index);
      return newItems;
    });
  }

  return (
    <div className={styles["todo-list"]}>
      <h2>Todo List</h2>
      <input
        type="text"
        className={styles["todo-input"]}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        required
      />
      <br />
      <button className={styles["todo-button"]} onClick={addTodos}>
        Add
      </button>
      <button className={styles["reset-button"]} onClick={() => setItems([])}>
        Reset
      </button>
      <ul>
        {items.map((element, index) => (
          <li key={index} className={styles["todo-item"]}>
            {element}
            <button
              className={styles["remove-button"]}
              onClick={() => removeItem(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
