import React from "react"
import CollectionsOverview from "../../Components/collection-overview/CollectionOverview.component"


import {Route} from "react-router-dom"
import Collection from "../../pages/collection/Collection.component";



const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;