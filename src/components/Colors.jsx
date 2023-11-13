export default function Colors(props) {

    function Color() {
        return props.items.map((element, index) => (
            <li key={element.id} style={{color:element.name}}>{element.name}</li>
        ))
    }

    return (
        <ul>
            <h2>Colors</h2>
            <Color />
        </ul>
    )
}