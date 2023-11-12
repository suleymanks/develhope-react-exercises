
export default function Colors(props) {

    return (
        <ul>{props.items.map((element, index) => (
            <li key={index} style={{color:element}}>{element}</li>
        ))}
        </ul>
    )
}