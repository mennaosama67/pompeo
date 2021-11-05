import React from 'react'
import "./SecondaryHeader.css"
function SecondaryHeader({title,bgImg}) {
    return (
        <div className="secondary-header" style={{ backgroundImage:`url('${process.env.PUBLIC_URL}/images/backgrounds/${bgImg}`}}>
            
                <div className="head-title">
                   <span> {title}</span>
                </div>
           
        </div>
    )
}

export default SecondaryHeader
