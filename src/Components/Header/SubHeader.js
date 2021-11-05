import React from 'react'
import './SubHeader.css'
function SubHeader(props) {
    return (
       <h5>
           {props.children}
       </h5> 
    )
 
}

export default SubHeader;
