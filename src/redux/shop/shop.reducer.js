import SHOP_DATA from "../../pages/shop/shop.data"
//  import DETAIL_DATA from "../../pages/shop/detail.data"

const INITIAL_STATE = {
    collections: SHOP_DATA,
    // detailz: DETAIL_DATA
    
  };
  
  const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default shopReducer;