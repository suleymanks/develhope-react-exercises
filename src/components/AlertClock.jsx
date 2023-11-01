
export default function AlertClock(props) {


    return (
        <>
            <button onClick={props.alert}>Click to see the time</button>
            <p>{props.date}</p>
        </>
    )
}