import { useState } from "react";

export default function Login(props) {
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        checkbox:false,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.username, formData.password, formData.checkbox)
    }

    function onReset() {
        setFormData({
            username:"",
            password:"",
            checkbox:false
        })
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input 
                type="text" 
                value={formData.username} 
                onChange={(e) => setFormData({...formData, username:e.target.value})}
                name="username" />
            <label >Password: </label>
            <input 
                type="text" 
                value={formData.password} 
                onChange={(e) => setFormData({...formData, password:e.target.value})}
                name="password" />
            Remember me ?
            <input 
                type="checkbox" 
                checked={formData.checkbox} 
                onChange={(e) => setFormData({...formData, checkbox: e.target.checked})}
                name="checkbox" />
            <button disabled={!formData.username || !formData.password} onClick={props.onLogin}>Login</button>
            <button onClick={onReset}>Reset</button>
        </form>
    )
}