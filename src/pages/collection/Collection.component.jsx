import React from 'react'
import "./Collection.scss"

import {connect} from "react-redux"

import {selectCollection} from "../../redux/shop/shop.selectors"
import CollectionItem from '../../Components/collection-item/CollectionItem.component';


function Collection({collection}) {
   const {title,items} = collection;
   console.log(collection)
    
    return (

        <div className="collection-page">

            <h2 className="title">{title}</h2>
            <div className="items">
{items.map(item => (
    <CollectionItem className="collection-space" key={item.id} item={item}/>
))
    }
    


            </div>
            
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
