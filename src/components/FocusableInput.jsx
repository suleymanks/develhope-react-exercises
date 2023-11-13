import {useRef,useEffect} from "react"

export default function FocusableInput() {
    const isMounted = useRef(false)
    console.log(isMounted.current)
    useEffect(()=>{
        if(!isMounted.current){
           console.log("The component is mounted very first time")
           isMounted.current = true;
           console.log(isMounted.current)
        }

    },[])

    return(
        <>
            <p>Hello React and Refs hook!</p>
        </>
    )
}