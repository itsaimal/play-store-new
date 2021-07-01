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
 

import StarIcon  from '@material-ui/icons/Star';

function DetailItem({item,clearItem,removeItem,hidden}) {

    const {imageUrl,price,name,imageUrl2,color,miles,transmission,imageUrl3,imageUrl4} = item;

    const [hide,setHide] = useState(false)

    const [button, setButton] = useState('Install')

   
    const alert = useAlert()
   

    return (
        <div className="detail-item">
       
      
       <img className="detail-image" src={imageUrl}/>

      

        

       <div className="detail-footer">




           
            <span className="name">{color}</span>
          
            <span className="rating">  {Array(miles)
            .fill()
            .map((_, i) => (
              <p className="star"><StarIcon/></p>
            ))}</span>
           

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
   <AwesomeSlider className="image-slider" >
    <div   data-src={imageUrl2} />
    <div data-src={imageUrl3}/>
    <div data-src={imageUrl4} />
  </AwesomeSlider>
   </div>

    </div>
    )
}







export default connect()(DetailItem)