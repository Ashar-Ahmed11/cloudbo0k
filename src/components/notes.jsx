import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './noteItem'
import { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import Spinner from './spinner'

export default function Notes() {
    const context = useContext(NoteContext)
    const { data, getNotes,editNote,loader } = context
    const history = useHistory(null)
    useEffect(() => {
        
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            history.push('/login')
        }
    
    }, [])

    

    const ref = useRef(null)
    const refClose = useRef(null)

    


    const [id, setId] = useState()

    const openModal = (id) => {
        ref.current.click()
        setId(id)
    }
    const updateNote = (noteInput) => {
        refClose.current.click()
       editNote(id,noteInput.title,noteInput.description,noteInput.tag)
    }

    const [noteInput, setNoteInput] = useState({ title: "", description: "", tag: "" })


    return (
        <div>


           




            <div className='row my-3'>
                <h1 >Your Notes</h1>
                <div>

                    <button hidden={true} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button>
                  

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">


                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Title</label>
                                            <input value={noteInput.title} onChange={(e)=>setNoteInput({...noteInput,title:e.target.value})} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Description</label>
                                            <input value={noteInput.description} onChange={(e)=>setNoteInput({...noteInput,description:e.target.value})}  type="text" class="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Tag</label>
                                            <input value={noteInput.tag} onChange={(e)=>setNoteInput({...noteInput,tag:e.target.value})}  type="text" class="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        
                
                                    </form>


                                </div>
                                <div className="modal-footer">
                                    <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={() => updateNote(noteInput)} type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {loader?  <div className="d-flex justify-content-center">
<Spinner/>
</div>:data.map((v, i) => {
                    return <NoteItem note={v} updateNote={openModal} />
                })}
                
            </div>
        </div>
    )
}