import YourAgeIs from "./YourAgeIs"

const Welcome = (props) => {
    const age = 19;
    return (
        <p>
            Welcome {props.name}
            { 18 < age < 65 && <YourAgeIs age={age} />}
        </p>
    )
}

export default Welcome
