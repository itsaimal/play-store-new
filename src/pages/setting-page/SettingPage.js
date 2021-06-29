
import React from 'react'
import Setting from "../../Components/setting-component/Setting"
import {Link} from "react-router-dom"
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


// optional cofiguration
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

function SettingPage() {
    return (
        <div>
        
         <AlertProvider template={AlertTemplate} {...options}>
            <Setting/>

            </AlertProvider>
        </div>
    )
}

export default SettingPage
