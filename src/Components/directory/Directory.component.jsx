import React from "react"

import "./Directory.scss"

import { connect } from 'react-redux';

import {Link} from "react-router-dom"
import play from "../../image/play.jpg"


const Directory = () => {

  

  return(
  <div className='directory-menu'>
  
     <Link className="option" to="/home">
            <button>
                Let's Start
            </button>
        
            </Link>
         
            <img className="image" src={play}/>
  </div>
)};



export default connect()(Directory);