import { useRef } from "react";

export default function UncontrolledLogin(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form)
        const formData = new FormData(form)
        console.log(formData)

        const username = formData.get("username")
        const password = formData.get("password")
        const checkbox = formData.get("checkbox")

        console.log(username,password,checkbox)
    }

    // We can acces values of the form here. Using FormData API is a standart way to handle form data. But there are various type to reach and use form data.
    // So yes there are non-standarts APIs.


    function onReset() {
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        checkboxRef.current.checked = false;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input 
                type="text" 
                name="username" />
            <label >Password: </label>
            <input 
                type="text" 
                name="password" />
            Remember me ?
            <input 
                type="checkbox" 
                name="checkbox" />
            <button onClick={props.onLogin}>Login</button>
            <button onClick={onReset}>Reset</button>
        </form>
    )
}
