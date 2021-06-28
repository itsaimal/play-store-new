import React from 'react'
import "./SubHeader.styles.scss"
import { withRouter } from 'react-router-dom';

function SubHeader({ title, imageUrl, size, history, linkUrl, match }) {
    return (
        <div className="sub-header">
            <div className="sub-header__title">
                <div className='options'>
                <p className="option"   onClick={() => history.push(`${match.url}${linkUrl}`)}>  {title}</p>
              
          </div>
            </div>
         
        </div>
    )
}

export default withRouter(SubHeader)
