import {useRef,useEffect} from "react"

export default function FocusableInput() {
    const inputRef = useRef("")

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    })

    return(
        <>
            <input type="text" ref={inputRef}/>
        </>
    )
}