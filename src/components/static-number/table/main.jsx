import React from 'react'
import './style.css'

function Table(props) {
    return (
        <div className="table">
            <h2>{props.number}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Table