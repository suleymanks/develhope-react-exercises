import { useState } from "react";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, checkbox)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Username: </label>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => {setUsername(e.target.value)}}
                name="name" />
            <label >Password: </label>
            <input 
                type="text" 
                value={password} 
                onChange={(e) => (setPassword(e.target.value))}
                name="pass" />
            Remember me ?
            <input 
                type="checkbox" 
                value={checkbox} 
                onChange={(e)=> setCheckbox(!checkbox)}
                name="remember" />
            <button disabled={!username || !password} onClick={props.onLogin}>Login</button>
        </form>
    )
}