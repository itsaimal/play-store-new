// import React from 'react'
// import "./CollectionPreview.styles.scss"
// import CollectionItem from '../collection-item/CollectionItem.component'

// function CollectionPreview({title,items}) {
//     return (
//         <div className="collection-preview">
//             <h1 className="title">
//                  {title.toUpperCase()} 
                
//             </h1>
            
//             <div className="preview">
//             {items
//         .filter((item, idx) => idx < 6)
//         .map(item => (
//           <CollectionItem key={item.id} item={item} />
//         ))}
//             </div>
//         </div>
//     )
// }

// export default CollectionPreview



import React from 'react'
import CollectionItem from '../collection-item/CollectionItem.component'
import "./CollectionPreview.styles.scss"
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items,history, match, routeName }) => {
 
  return(
  <div className='collection-preview'>
    <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
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