import YourAgeIs from "./YourAgeIs"

const Welcome = (props) => {
    const age = 22;
    return (
        <p>
            Welcome {props.name}
            {18<age<65 && props.name="John" && <YourAgeIs age={25} />}
        </p>
    )
}

export default Welcome
