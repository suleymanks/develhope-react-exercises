import { useRef } from "react";

export default function UncontrolledLogin(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form)
        const formData = new FormData(form)
        console.log(FormData)

        //usestate hook look better and easier way than using formdata we can easily manage and making dynamic components.

        const username = formData.get("username")
        const password = formData.get("password")
        const checkbox = formData.get("checkbox")

        console.log(username,password,checkbox)
    }


    function onReset() {
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        checkboxRef.current.checked = false;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>UNCONTROLLED LOGIN</h2>
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