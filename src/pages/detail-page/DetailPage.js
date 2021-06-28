import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import DetailItem from '../../Components/detail-item/DetailItem';
import "./DetailPage.scss"
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


// optional cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

function DetailPage({cartItems}) {
    return (
        <div className="detail-page">
         <AlertProvider template={AlertTemplate} {...options}>
             {
        cartItems.filter((item, idx) => idx < 1).map(cartItem => (
          <DetailItem key={cartItem.id} item={cartItem} />
        ))}
        </AlertProvider>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  });

export default connect(mapStateToProps)(DetailPage)
