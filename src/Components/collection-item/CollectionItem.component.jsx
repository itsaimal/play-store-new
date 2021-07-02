

import React from 'react'
import CustomButton from '../custom button/CustomButton.component'
import "./CollectionItem.styles.scss"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.action"


import {withRouter,Link} from "react-router-dom"

import StarIcon  from '@material-ui/icons/Star';





function CollectionItem({item, addItem}) {
    const {imageUrl,rate,name} = item;
    return (
        <Link to="/detail">
            
        <div className="collection-item" onClick={() => 
                 
                 addItem(item)
               
                 } >

            <div className="image"  style={{backgroundImage:`url(${imageUrl})`}}/>

         



                <div className="collection-footer">
                  
                    <span className="name">{name}</span>
                    <span className="name">
                    {Array(rate)
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
