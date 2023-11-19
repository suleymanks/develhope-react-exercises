import '../index.css';

export default function Welcome({name}) {
    return (
        <div className='welcome'>
            <h1>React Exercise - Styling Components</h1>
            <p>Welcome, {name}!</p>
        </div>
    )
}