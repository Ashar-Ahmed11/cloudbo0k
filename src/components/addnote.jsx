import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useState, useRef } from 'react'
import Spinner from './spinner'
export default function AddNote() {
    const context = useContext(NoteContext)
    const { addNote, addNoteLoader } = context
    const [noteInput, setNoteInput] = useState({ title: "", description: "" })


    const myref = useRef(null)

    if (addNoteLoader) {
        myref.current.click()
    }
    return (
        <div>
            <div>
            <button hidden={true} ref={myref} data-backdrop="static" data-keyboard="false" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loaderModal">
                Launch demo modal
            </button>

            <div style={{ pointerEvents: "none" }} className="modal fade" id="loaderModal" >
                <div className="modal-dialog">
                    <div className="d-flex justify-content-center m-5 p-5">
                        <div className="m-5 p-5" style={{ fontSize: "40px" }}>
                            <Spinner />
                        </div>
                    </div>

                </div>
            </div>

            </div>

            <p className="h1 ">Add  a Note</p>
            <form onSubmit={(e) => { addNote(e, noteInput.title, noteInput.description);setNoteInput({title:"",description:""}) }}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title</label>
                    <input onChange={(e) => setNoteInput({ ...noteInput, title: e.target.value })} value={noteInput.title} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Description</label>
                    <input value={noteInput.description} onChange={(e) => setNoteInput({ ...noteInput, description: e.target.value })} type="text" className="form-control" id="exampleInputPassword1" required={true} />
                </div>

                <button type='submit' className="btn btn-primary">Add</button>
        
            </form>
        </div>
    )
}