import YourAgeIs from "./YourAgeIs"

const Welcome = (props) => {
    const age = 19;
    return (
        <p>
            Welcome {props.name}
            { age && <YourAgeIs age={age} />}
        </p>
    )
}

export default Welcome
