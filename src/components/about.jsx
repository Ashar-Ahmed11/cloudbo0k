import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import asharimg from './asharimg.jpg'
export default function About() {
    const context = useContext(NoteContext)

    return (
        <div>
      
            <div className="container">
            <h1 className="text-center my-2">Powered by</h1>
            <hr />
                <div className="row">
                   
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="" />

                    </div>
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png" alt="" />

                    </div>
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/express_original_logo_icon_146527.png" alt="" />

                    </div>
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png" alt="" />

                    </div>
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://www.cyclic.sh/images/logos/big_logo.png" alt="" />

                    </div>
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_wordmark_logo_icon_146620.png" alt="" />

                    </div>
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png" alt="" />

                    </div>
                    <div className=" col-md-4 col-lg-3 col-6 my-4">
                        <img width="150px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/git_original_wordmark_logo_icon_146510.png" alt="" />

                    </div>
                </div>
                <hr />
                <h1 className="text-center">Developed by</h1>
                <hr />
                <div className="d-flex justify-content-center">
                <img width="200px"  style={{borderRadius:"20px"}} src={asharimg} alt="" />
                </div>
                <h3 className="text-center my-2">Ashar Ahmed</h3>

            </div>
            <hr />
        </div>
    )
}