import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useLocalStorage from '../../components/useLocalStorage'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
const NoteState = (props)=>{
  const history = useHistory()
  

    const [loader, setLoader] = useState(false)
    const [num, setNum] = useState(9)
    const [data, setData] = useState([])

    const[isLogged,setIsLogged] = useLocalStorage('loggedInfo',false)
    const [username, setUsername] = useLocalStorage("username","")
    const [modalLoader, setModalLoader] = useState(false)
    const [addNoteLoader, setAddNoteLoader] = useState(false)
      const getNotes = async ()=>{
        setLoader(true)
        const url = "https://bored-rose-slug.cyclic.app/api/notes/fetchallnotes"
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
  
         
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },

        });
        const json = await response.json()
        setData(json)
        setLoader(false)
      }
      



    const addNote =async (e,title,description)=>{
      e.preventDefault()
      setAddNoteLoader(true)
      const url = `https://bored-rose-slug.cyclic.app/api/notes/addnote`
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.

       
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({title:title,description:description,tag:"General"})

      });

      setNum(num+1)
      const newId = num.toString()
      const note =   {
        "_id": "63b29fec2ad8655d250c81cf"+newId,
        "user": "63b28dec326df727c229b50a",
        "title": title,
        "description":description,
        "tag": "personal",
        "date": "2023-01-02T09:12:12.382Z",
        "__v": 0
      }
      setData([...data,note])
      setAddNoteLoader(false)
    }
    const deleteNote = async (id)=>{
      setModalLoader(true)
      const url = `https://bored-rose-slug.cyclic.app/api/notes/deletenote/${id}`
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
         
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
            // 'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiMjhkZWMzMjZkZjcyN2MyMjliNTBhIn0sImlhdCI6MTY3MjY1MDcwOX0.n9nAmBZVhcVp0_PEf0xqQ68H4f5iQOORHQxy3unXt3k'
          },

        });
    
      const filteredData = data.filter((v)=>{
        return v._id !== id
      })
      setData([...filteredData])
      setModalLoader(false)
   
    }

    const editNote = async (id,title,description,tag)=>{

      setModalLoader(true)
      const url = `https://bored-rose-slug.cyclic.app/api/notes/updatenote/${id}`
      
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  
         
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },
          body: JSON.stringify({title:title,description:description,tag:tag})

        });

      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if(element._id===id){
          element.title = title,
          element.description = description,
          element.tag = tag
        }
      }
      setData([...data])
      setModalLoader(false)

    }
    const [alertSuccess, setAlertSuccess] = useState(false)
    const [alertInvalid, setAlertInvalid] = useState(false)

    const login =async(email,password)=>{
      setLoader(true)
      const url = `https://bored-rose-slug.cyclic.app/api/auth/login`
      
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.

       
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({email:email,password:password})

      });
      const token = await response.json()
      setLoader(false)
      // console.log(token)
      if(token.success){
        localStorage.setItem('token',token.authToken)
        setAlertSuccess(true)
        // console.log(token.userName)

        setTimeout(() => {
          setUsername(token.userName)
          setIsLogged(true)
          setAlertSuccess(false)
        history.push('/')
        }, 1000);
      }
      else{
        setAlertInvalid(true)
        setTimeout(() => {
          setAlertInvalid(false)
        }, 1000);
      }
     
    }
    const signup=async (name,email,password)=>{
      setLoader(true)
      const url = `https://bored-rose-slug.cyclic.app/api/auth/createuser`
      
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.

       
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({name:name,email:email,password:password})

      });
      const token = await response.json()
      setLoader(false)
      console.log(token)
      if(token.success){
        localStorage.setItem('token',token.authToken)
        setAlertSuccess(true)
        setTimeout(() => {
          setUsername(token.userName)
          setIsLogged(true)
          setAlertSuccess(false)
          history.push('/')
        }, 1000);
      }
      else{
        setAlertInvalid(true)
        setTimeout(() => {
          setAlertInvalid(false)
        }, 1000);
      }
      
    }


    let location = useLocation();
    useEffect(() => {
      if(location.pathname==="/login"){
          document.body.style.backgroundColor = "#FAFAFA"
      }
      if(location.pathname==="/signup"){
          document.body.style.backgroundColor = "#FAFAFA"
      }
      if(location.pathname==="/"){
          document.body.style.backgroundColor = "white"
      }
      if(location.pathname==="/about"){
          document.body.style.backgroundColor = "white"
      }

    
    }, [location])


    return(
        <NoteContext.Provider value={{addNoteLoader,modalLoader,loader,setLoader,data,addNote,deleteNote,getNotes,editNote,login,alertSuccess,alertInvalid,signup,isLogged,setIsLogged,username}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState