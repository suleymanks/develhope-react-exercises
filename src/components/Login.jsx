import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkbox, setCheckbox] = useState(true);

    console.log(username, password, checkbox)

    return (
        <form>
            <label htmlFor="name">Username: </label>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => {setUsername(e.target.value)}}
                name="name" />
            <label htmlFor="pass">Password: </label>
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
            <button>Login</button>
        </form>
    )
}