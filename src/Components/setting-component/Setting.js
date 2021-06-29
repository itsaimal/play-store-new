import React from 'react'
import "./Setting.scss"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 
import { useAlert } from 'react-alert'

function Setting() {

    const alert = useAlert()
    return (
        <div className="setting-page">

       <div className="heading">
           <h2>
           Email preferences
           </h2>

           <div className="container-one">
           <label className="checkmark" >
  <input type="checkbox"/>
  <span >Keep me up to date with news and offers from Google Play.</span>
</label>

           <label >
  <input type="checkbox"/>
  <span >I wish to receive email notifications when developers reply to my reviews of their applications.</span>
</label>
              


           </div>
       </div>

       <div className="sub-heading">
<h2>Authentication preference</h2>

<div className="container-two">
               <p>Require authentication for:</p>


               <label className="checkmark" >
  <input type="radio" checked="checked" name="radio"/>
  <span className="checkmark">Purchases and app installs through play.google.com</span>
</label>


               <label >
  <input type="radio"  name="radio"/>
  <span className="checkmark">Only app installs through play.google.com</span>
</label>
<br/>

             


               <p>To prevent unauthorised purchases, you can require authentication for all purchases (including in-app purchases) made through play.google.com on any device where you're signed in with this Google Account. This does not apply to purchases made through mobile apps. Requiring purchase authentication is important if you share your devices with others or want to prevent purchases of child-friendly content through play.google.com.</p>

           </div>
       </div>

       <button onClick={() => {
          alert.success("Congrates on clicking it"); 
         }}>Update</button>
            
        </div>
    )
}

export default Setting