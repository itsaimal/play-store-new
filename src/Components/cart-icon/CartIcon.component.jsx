import React from 'react'
import "./CartIcon.scss"
import liked from "../../image/liked.png"
import {toggleCartHidden} from "../../redux/cart/cart.action"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"

import {connect} from "react-redux";

function CartIcon({toggleCartHidden,itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <img src={liked} className="liked-icon" alt="liked"/>
            <span className="item-count">{itemCount}</span>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
