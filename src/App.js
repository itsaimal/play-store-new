// import './App.css';
// import Header from "./Components/header/Header.component"
// import SideMenu from './Components/side-menu/SideMenu.component';
// import SubHeader from "./Components/sub-header/SubHeader.component"
// import {Route,Switch} from "react-router-dom"
// import HomePage from './pages/homepage/HomePage';

// function App() {
//   return (
//     <div className="app">
// <Header/>
// <SubHeader/>
// <SideMenu/>

// <Switch>
// <HomePage/>
// </Switch>
//     </div>
//   );
// }

// export default App;


import './App.css';

import {Route,Switch} from "react-router-dom"
import Header from './Components/header/Header.component';
//  import SubHeader from "./Components/sub-header/SubHeader.component"

import React, {useEffect,lazy,Suspense} from 'react';
import Spinner from "./Components/spinner/Spinner"
// import {selectCollectionsForPreview} from "./redux/shop/shop.selectors"

// import {addCollectionAndDocuments} from "./firebase/firebase"
// import {connect} from "react-redux"
// import {createStructuredSelector} from "reselect";

// import CollectionDetail from './components/collection-detail/CollectionDetail.component';
// import HomePage from './pages/homepage/HomePage';
// import ShopPage from './pages/shop/ShopPage';
// import CheckoutPage from './pages/checkout/Checkout.page';
// import DetailPage from './pages/detail-page/DetailPage';
 import SideMenu from './Components/side-menu/SideMenu.component';
 import SubHeaderPage from './pages/sub-header/SubHeaderPage';
// import SettingPage from './pages/setting-page/SettingPage';


 const HomePage = lazy(() => import('./pages/homepage/HomePage'));
 const ShopPage = lazy(() => import("./pages/shop/ShopPage"));
// const Checkout = lazy(() => import("./pages/checkout/Checkout.page"));
  const DetailPage = lazy(() => import("./pages/detail-page/DetailPage"));

  const SettingPage = lazy(() => import("./pages/setting-page/SettingPage"));
  const Shopper = lazy(() => import("./pages/shopper/shopper"));

const App = () => {

  // componentDidMount(){
  //   const {collectionsArray} = this.props;


  //   addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})))
  // }



  
  return (
    <div>
      <Header />
      <SubHeaderPage/>
      <SideMenu/>
      <Switch>
           <Suspense fallback={<Spinner/>}> 
        <Route exact path='/' component={HomePage} />
        <Route path='/setting' component={SettingPage}/>
        
        <Route path='/home' component={ShopPage} />
        {/* <Route  path='/checkout' component={CheckoutPage} /> */}
         <Route exact path='/detail' component={DetailPage} />

         <Route exact path='/page' component={Shopper} />
           

         
       
       
         </Suspense> 
       
      </Switch>
    </div>
  );
}

// const mapStateToProps = createStructuredSelector({
//   collectionsArray:selectCollectionsForPreview
// })

export default App;