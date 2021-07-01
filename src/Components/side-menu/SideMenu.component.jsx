import React from 'react'
import "./SideMenu.styles.scss"
import {Link} from "react-router-dom"

function SideMenu() {
    return (
        <div className="sidemenu">
            
            <div className="sidemenu-title">
               
<p className="apps">Apps</p>
 <Link to="/page">
<p className="my-apps">My apps</p>
<p className="shop">Shop</p></Link>
            </div>
            

        </div>
    )
}

export default SideMenu
