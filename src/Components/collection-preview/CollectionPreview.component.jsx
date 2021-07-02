


import React from 'react'
import CollectionItem from '../collection-item/CollectionItem.component'
import "./CollectionPreview.styles.scss"
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items,history, match, routeName }) => {
 
  return(
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>

    <button  onClick={() => history.push(`${match.path}/${routeName}`)}>
      see more
    </button>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 6)
        .map(item => (
          <CollectionItem  key={item.id} item={item} />
        ))}
    </div>
  </div>)
};

export default withRouter(CollectionPreview);