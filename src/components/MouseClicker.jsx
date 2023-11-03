
export default function MouseClicker(props) {
    return (
        <>
            <button onClick={(e) => console.log(e.target.name)} name="one">One</button>
            <button onClick={(e) => console.log(e.target.name)} name="two">Two</button>
            <button onClick={(e) => console.log(e.target.name)} name="three">Three</button>
        </>
    )
}