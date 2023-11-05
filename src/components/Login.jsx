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

    function handleChange(e) {
        const {name,value,type,checked} = e.target
        setFormData((formData) => {
            return {
                ...formData,
                [name] : type == 'checkbox' ? checked : value,
            }
        })
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
                onChange={handleChange}
                name="username" />
            <label >Password: </label>
            <input 
                type="text" 
                value={formData.password} 
                onChange={handleChange}
                name="password" />
            Remember me ?
            <input 
                type="checkbox" 
                checked={formData.checkbox} 
                onChange={handleChange}
                name="checkbox" />
            <button disabled={!formData.username || !formData.password} onClick={props.onLogin}>Login</button>
            <button onClick={onReset}>Reset</button>
        </form>
    )
}