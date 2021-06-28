import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import homeReducer from "./home/home.reducer";
import shopReducer from "./shop/shop.reducer"
import directoryReducer from './directory/directory.reducer';
import cartReducer from "./cart/cart.reducer"


const persistConfig = {
    key: 'root',
    storage,
    whitelist:[
        'cart',
        // 'home'
]
};

const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
// home: homeReducer
});

export default persistReducer(persistConfig,rootReducer);
