import React,{useState} from 'react'
import "./DetailItem.scss"
// import {ClearItemFromDetail, removeItem} from "../../redux/detail/detail.action"
import {connect} from "react-redux"

import ImageGallery from 'react-image-gallery';


 import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

 import Progress from "../Progress-bar/Progress"



 import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
import { useAlert } from 'react-alert'
 

function DetailItem({item,clearItem,removeItem,hidden}) {

    const {imageUrl,price,name,imageUrl2,color,miles,transmission,imageUrl3} = item;

    const [hide,setHide] = useState(false)

    const [button, setButton] = useState('Install')

   
    const alert = useAlert()
   

    return (
        <div className="detail-item">
       
      
       <img src={imageUrl}/>

      

        

       <div className="detail-footer">




           
            <span className="name">{color}</span>
          
            <span className="name">{miles}_miles</span>
           

         <button className="click" onClick={() => {
           setHide(!hide); alert.success("Downloaded"); 
         }}   >{button}</button>

        </div>
      <div>
      
       {
         hide ?   <Progress className="progress" done="100"/> : null
       }
       </div>
   
<div className="slider">
   <AwesomeSlider>
    <div data-src={imageUrl2} />
    <div data-src={imageUrl3}/>
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
   </div>

    </div>
    )
}







export default connect()(DetailItem)