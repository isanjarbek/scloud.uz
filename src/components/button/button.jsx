import React from 'react'
import './button.css'


function Button(props) {
   
    return (
        <div className="started">
            <button onClick={props.show} className={props.name}>{props.text}</button>
            {/* <Button
                variant="contained" color="primary"
                onClick={props.show} className={props.name}
            >
                {props.text}
            </Button> */}
        </div>
    )
}

export default Button