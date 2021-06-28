import React from 'react'
import SubHeader from '../sub-header/SubHeader.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/director.selectors';
import "./SubHeaderDirectory.scss"

function SubHeaderDirectory({sections}) {
    return (
        <div className="sub-header-directory">

{sections.filter((item, idx) => idx < 3).map(({ id, ...otherSectionProps }) => (
      <SubHeader key={id} {...otherSectionProps} />
    ))}
            
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  });
export default connect(mapStateToProps)(SubHeaderDirectory)
