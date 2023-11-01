import YourAgeIs from "./YourAgeIs"

const Welcome = (props) => {
    return (
        <p>
            Welcome {props.name}
            <YourAgeIs age={25} />
        </p>
    )
}

export default Welcome