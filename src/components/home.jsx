import React from 'react'
import Notes from './notes'
import AddNote from './addnote'

export default function Home() {
 
    return (
        <div>
            <div className="container my-2">
           <AddNote/>
           
                <Notes/>

            </div>
        </div>
    )
}