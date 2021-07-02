 import React from 'react'
 import "./Header.scss"
 import logo from "../../image/play logo.png"
 import search from "../../image/Search.png"
import {Link} from "react-router-dom"


import "./Header.scss"
import {connect} from "react-redux"

 function Header() {
     return (
         <div className="header">

             <div >
<Link to="/home">
 <img className="logo" src={logo}/>
</Link>
             </div>

             <div className="header-search">
             <input className="input" type="email" placeholder="Search"/>


             <button className="search-button">
                 <img className="search-image" src={search} />
             </button>
           </div>

 <div className="options">




</div> 


           
         </div>
     )
 }


export default connect()(Header);






