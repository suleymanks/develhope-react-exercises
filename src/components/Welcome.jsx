import YourAgeIs from "./YourAgeIs"

const Welcome = (props) => {
    const age = 22;

    return (
        <p>
            Welcome {props.name}
            {age > 18 ? <YourAgeIs age={age} /> : <p>You are very young!</p>}
        </p>
    )
}

export default Welcome