import { useEffect, useState, createContext } from "react"
import './Clock.css'

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [language, setLanguage] = useState('en')
    const LanguageContext = createContext();


    useEffect(()=> {    

        setInterval(()=>{ setTime(new Date())

        },1000)

    },[])

    return(
        <LanguageContext.Provider value={language}>
            <select>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="it">Italian</option>
                <option value="de">German</option>
            </select>
            <div className="clock">
                <h1 className="time">Clock</h1>
                {time.toLocaleTimeString()}
                <hr />
            </div>
        </LanguageContext.Provider>
    )
}