
export default function MouseClicker(props) {
    return (
        <>
            <button onClick={(e) => console.log(e.target.name)} name={props.name}><img src="https://www.w3schools.com/images/compatible_safari.png"/></button>
        </>
    )
}