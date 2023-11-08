import { useRef } from "react";

export default function UncontrolledLogin(props) {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const checkboxRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usernameRef.current.value, passwordRef.current.value);
    }

     // We can acces password and username values with using current.value same as vanilla javascript


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
                ref={usernameRef}
                name="username" />
            <label >Password: </label>
            <input 
                type="text" 
                ref={passwordRef}
                name="password" />
            Remember me ?
            <input 
                type="checkbox" 
                ref={checkboxRef}
                name="checkbox" />
            <button disabled={!usernameRef.current || !passwordRef.current} onClick={props.onLogin}>Login</button>
            <button onClick={onReset}>Reset</button>
        </form>
    )
}
