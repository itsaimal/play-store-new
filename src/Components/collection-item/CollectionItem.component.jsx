// import React from 'react'
// import "./CollectionItem.styles.scss"

// function CollectionItem({item}) {
//     const {name,price,imageUrl} = item;
//     return (
//         <div className='collection-item'>
//         <div
//           className='image'
//           style={{
//             backgroundImage: `url(${imageUrl})`
//           }}
//         />
//         <div className='collection-footer'>
//           <span className='name'>{name}</span>
//           <span className='price'>{price}</span>
//         </div>
      
//       </div>
//     )
// }

// export default CollectionItem


import React from 'react'
import CustomButton from '../custom button/CustomButton.component'
import "./CollectionItem.styles.scss"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.action"
import favorite from "../../image/favourites.png"
// import {addDetailItem} from "../../redux/detail/detail.action"
import {withRouter,Link} from "react-router-dom"

import StarIcon  from '@material-ui/icons/Star';



//history withRouter in progress

function CollectionItem({item, addItem,addDetailItem,history}) {
    const {name,price,imageUrl,miles,transmission,color} = item;
    return (
        <Link to="/detail">
            
        <div className="collection-item" onClick={() => 
                 
                 addItem(item)
                 //  ,
                 //  history.push('/detail')
                 } >

            <div className="image"  style={{backgroundImage:`url(${imageUrl})`}}/>

            {/* <div className="car-title">
            <span className="title">{name}</span>

            </div> */}



                <div className="collection-footer">
                  
                    <span className="name">{color}</span>
                    <span className="name">
                    {Array(miles)
            .fill()
            .map((_, i) => (
              <p className="star"><StarIcon/></p>
            ))}</span>
                    {/* <span className="name">{transmission}</span> */}

                    {/* <span className="price">${price}</span> */}

                </div>
                
                   {/* <img className="fav-button" onClick={() => addItem(item)} src={favorite} alt="favorite"/>
              */}



           
            
        </div>
        </Link>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    // addDetailItem: item => dispatch(addDetailItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem))
