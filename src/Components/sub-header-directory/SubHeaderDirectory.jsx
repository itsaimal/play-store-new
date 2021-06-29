import React from 'react'
import SubHeader from '../sub-header/SubHeader.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Link} from "react-router-dom"

import { selectDirectorySections } from '../../redux/directory/director.selectors';
import "./SubHeaderDirectory.scss"
import setting from "../../image/setting.png"

function SubHeaderDirectory({sections}) {
    return (
        <div className="sub-header-directory">

{sections.filter((item, idx) => idx < 3).map(({ id, ...otherSectionProps }) => (
      <SubHeader key={id} {...otherSectionProps} />
    ))}

<Link className="opti" to="/setting"><button>
    <img className="image" src={setting}/></button>
</Link>
            
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  });
export default connect(mapStateToProps)(SubHeaderDirectory)
