import { useEffect, useState, useContext } from "react"
import './Clock.css'
import { LanguageContext } from "../contexts/LanguageContext";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const { language, setLanguage, handleLanguageChange } = useContext(LanguageContext);

    useEffect(()=> {    

        setInterval(()=>{ setTime(new Date())

        },1000)

    },[])

    return(
            <div className="clock">
                <select onChange={handleLanguageChange}>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="tr">Turkish</option>
                    <option value="it">Italian</option>
                </select>
                <h1 className="time">Clock</h1>
                {time.toLocaleTimeString()}
                <p>Language: {language}</p>
                <hr />
            </div>
    )
}