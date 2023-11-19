import { useState } from "react";

export default function useForm() {
    const [formData, setFormData] = useState({
        username:'',
        password:'',
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return {
        formData,
        handleChange,
    }
}