import React from "react"
import MenuItem from "../menu-item/MenuItem.component"
import "./Directory.scss"

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/director.selectors';
import {Link} from "react-router-dom"


const Directory = ({ sections }) => {

  

  return(
  <div className='directory-menu'>
    {/* {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))} */}
     <Link className="option" to="/home">
            <button>
                Let's Start
            </button>
        
            </Link>
         
            <img className="image" src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-changes-play-store-png-logo-0.png"/>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);