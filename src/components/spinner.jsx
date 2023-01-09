import React from 'react'


export default function Spinner() {
    return (
        <div>
            <div className="spinner-border text-primary m-5" style={{width:"70px",height:"70px"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}