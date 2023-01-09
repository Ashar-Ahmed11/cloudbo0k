import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import {useLocation} from 'react-router-dom'
export default function Navbar() {
    const context = useContext(NoteContext)
    const {isLogged,setIsLogged,username} = context
    const history = useHistory(null)

  
    const logout = ()=>{
        localStorage.removeItem('token')
        setIsLogged(false)
        history.push('/login')
    }

    let location = useLocation();
    useEffect(() => {
    
    }, [location])
    return (
        <div>
            {isLogged && <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{fontSize:"30px",fontWeight:"bold",color:"royalblue"}} to="/">CloudBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={location.pathname==="/"?"nav-link active":"nav-link"} aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={location.pathname==="/about"?"nav-link active":"nav-link"} to='/about'>About</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* {localStorage.getItem('token')?<div><li className="nav-item">
                     
                                    <button onClick={()=>logout()} className="btn btn-primary">Logout</button>
                          

                            </li></div>:<div className='nav-item'>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/login'>
                                    <button className="btn btn-primary">Login</button>
                                </Link>

                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/signup'>
                                    <button className="btn btn-primary">Sign Up</button>
                                </Link>
                            </li>
                            </div>} */}
                            
                   
                                   <form className="d-flex">
                                        <p className='my-2'>{username}</p>
                                    <button onClick={logout} className="btn btn-danger mx-2">Logout</button>
                                    </form>      
                           
                                
                            
                   
                            
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>}
        </div>
    )
}