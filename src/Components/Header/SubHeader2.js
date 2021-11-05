import React from 'react'
import './SubHeader2.css'
function SubHeader2(props) {
    return (
        <div className="sub_2" >
            <h1>{props.part1} <span className="icon-img">&</span> {props.part2}</h1>
        </div>
    )
}

export default SubHeader2
