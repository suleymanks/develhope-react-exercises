
export default function MouseClicker(props) {
    return (
        <>
            <button onClick={(e) => console.log(e.target.name)} name={props.name}>36-Handling Events</button>
        </>
    )
}