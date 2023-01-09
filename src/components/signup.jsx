import React from 'react'
import { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import Spinner from './spinner'
export default function Signup() {
    const context = useContext(NoteContext)
    const { signup, loader } = context
    const [information, setInformation] = useState({ name: '', email: '', password: '' })
    const createUser = (e, name, email, password) => {
        e.preventDefault()
        signup(name, email, password)
    }
    return (
        <div>


            <div className='container' style={{ marginTop: "100px" }}>
                <div className="">
                    <div className="d-flex justify-content-center">
                        <div className="card p-2" style={{ width: "400px" }}>
                            <h1 className=' my-2 text-center' style={{ fontSize: "50px", fontWeight: "bold", color: "royalblue" }}>CloudBook</h1>
                            <div>
                                <form className="px-5 my-2" onSubmit={(e) => createUser(e, information.name, information.email, information.password)}>
                                    <div className="mb-3">
                                      
                                        <input style={{backgroundColor:"#FAFAFA"}} placeholder='Name' value={information.name} onChange={(e) => { setInformation({ ...information, name: e.target.value }) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
                                    </div>
                                    <div className="mb-3">
                                       
                                        <input style={{backgroundColor:"#FAFAFA"}} placeholder='Email Address' value={information.email} onChange={(e) => { setInformation({ ...information, email: e.target.value }) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                      
                                        <input style={{backgroundColor:"#FAFAFA"}} placeholder='Password' type="password" className="form-control" id="exampleInputPassword1" required={true} />
                                    </div>
                                    <div className="mb-3">
                                       
                                        <input style={{backgroundColor:"#FAFAFA"}} placeholder='Confirm Password' value={information.password} onChange={(e) => { setInformation({ ...information, password: e.target.value }) }} type="password" className="form-control" id="exampleInputPassword1" required={true} />
                                    </div>
                                    
                                    <button style={{width:"100%"}} disabled={loader ? true : false} type="submit" className="btn btn-primary">Sign Up</button>
                                </form>


                            </div>


                    
                    </div>
                    </div>
                        {loader && <div className="d-flex justify-content-center">
                            <Spinner />
                        </div>}





                </div>
            </div>

        </div>
    )
}