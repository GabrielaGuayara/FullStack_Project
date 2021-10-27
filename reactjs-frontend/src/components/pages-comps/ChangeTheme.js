import React ,{useState} from 'react'
import { FaMoon, FaSun} from "react-icons/fa"

export const ChangeTheme = () => {

    const [change, setChange] = useState(false)
    
    const Toggle =()=>{
        document.body.classList.toggle("dark")
        setChange(!change)
    }

    return (
        <div>
            <button onClick={Toggle}>{change ? <FaSun/> : <FaMoon/>}</button>
        </div>
    )
}
