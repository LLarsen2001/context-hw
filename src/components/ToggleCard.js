import { useState } from "react"

const ToggleCard = (props) =>{
    const [show, setShow] = useState(true)
    return(
        <div>
            <h3>{props.title}</h3>
            <button onClick={()=> setShow(!show)}>toggle</button>
            <div className={show ? 'showcard':'hidecard'}>
                
                {props.children}
            </div>
        </div>
    )
}
export default ToggleCard