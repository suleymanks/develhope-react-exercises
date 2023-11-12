
export default function Colors(props) {

    return (
        <ul>{props.items.map((element, index) => (
            <li key={element.id} style={{color:element.name}}>{element.name}</li>
        ))}
        </ul>
    )
}