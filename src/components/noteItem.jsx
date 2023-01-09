
import React from 'react'
import { useContext,useState,useRef } from 'react'
import NoteContext from '../context/notes/noteContext'
import Spinner from './spinner'
export default function NoteItem({ note, updateNote }) {
    const context = useContext(NoteContext)
    const { deleteNote, editNote,modalLoader } = context

    const refer = useRef(null)
  
    if(modalLoader){
        refer.current.click()
    }

    return (
        <div className='col-md-4 col-lg-3 col-6'>

            <button hidden={true} ref={refer} data-backdrop="static" data-keyboard="false" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loaderModal">
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



            <div className="card my-2" >

                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="d-flex justify-content-around">
                        <div>

                            <i className="fa fa-trash" style={{ fontSize: "30px", color: "#dc3545" }} onClick={() => deleteNote(note._id)} aria-hidden="true"></i>

                        </div>
                        <div>
                            <i onClick={() => updateNote(note._id)} class="fa fa-pencil-square" style={{ fontSize: "30px", color: "royalBlue" }} aria-hidden="true"></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}