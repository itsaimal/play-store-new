

import React from 'react'
import CustomButton from '../custom button/CustomButton.component'
import "./CollectionItem.styles.scss"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.action"
import favorite from "../../image/favourites.png"

import {withRouter,Link} from "react-router-dom"

import StarIcon  from '@material-ui/icons/Star';





function CollectionItem({item, addItem,addDetailItem,history}) {
    const {imageUrl,miles,color} = item;
    return (
        <Link to="/detail">
            
        <div className="collection-item" onClick={() => 
                 
                 addItem(item)
               
                 } >

            <div className="image"  style={{backgroundImage:`url(${imageUrl})`}}/>

         



                <div className="collection-footer">
                  
                    <span className="name">{color}</span>
                    <span className="name">
                    {Array(miles)
            .fill()
            .map((_, i) => (
              <p className="star"><StarIcon/></p>
            ))}</span>
                  

                </div>
                
               



           
            
        </div>
        </Link>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem))
