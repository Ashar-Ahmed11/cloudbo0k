import React from 'react'
import { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import Spinner from './spinner'
import { Link } from 'react-router-dom'
import {useEffect} from 'react'

import { useLocation } from 'react-router-dom'
export default function Login() {
    const context = useContext(NoteContext)
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const { login, alertSuccess, alertInvalid, loader } = context
    
    const passLogin = (e, creds) => {
        e.preventDefault()

        login(creds.email, creds.password)

    }
    
   


    return (
        <div>

            <div>
                {alertSuccess && <div class="alert alert-success" style={{marginBottom:"0",position:"fixed",top:"0",left:"0",width:"100%"}}role="alert">
                    Logged In Successfully!
                </div>}
                {alertInvalid && <div class="alert alert-danger" style={{marginBottom:"0",position:"fixed",top:"0",left:"0",width:"100%"}} role="alert">
                    Please enter correct credentials!
                </div>}

                <div className='container' style={{marginTop:"100px"}}>
                    <div className="">
                        <div className="d-flex justify-content-center">
                            <div className="card p-2" style={{width:"400px"}}>
                                <h1 className=' my-2 text-center' style={{ fontSize: "50px", fontWeight: "bold", color: "royalblue" }}>CloudBook</h1>
                                <div>
                                    <form onSubmit={(e) => passLogin(e, credentials)} className='px-5 my-2'>
                                        <div class="mb-3">

                                            <input required="true" style={{backgroundColor:"#FAFAFA"}} placeholder='Email' value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                          
                                        </div>
                                        <div class="mb-3">

                                            <input required="true" style={{backgroundColor:"#FAFAFA"}} placeholder='Password' value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} type="password" class="form-control" id="exampleInputPassword1" />
                                        </div>

                                        <button type="submit" style={{ width: "100%" }} disabled={loader ? true : false} class="btn btn-primary">Login</button>
                                        <p className="text-center my-2 form-text">Don't have an account?</p>
                                        <div className="container d-flex justify-content-center">
                                            <Link to="/signup" className='d-flex justify-content-center' style={{ width: "70%", textDecoration: "none" }}> <button style={{ backgroundColor: "#42B72A", color: "white" }} disabled={loader ? true : false} class="btn">Sign Up</button></Link>
                                        </div>

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
        </div>
    )
}