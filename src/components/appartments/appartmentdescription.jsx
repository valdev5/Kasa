import React, { useState } from "react";
import "./appartmentdescription.scss"

 export function AppartmentDescription(props){
    const {isContentVisible,setItContentVisible} = useState(false)
    return(
        <div className='appartment__description'>
                        <p className='description__header'>
                            <span>{props.title}</span>
                            <i className="fa-solid fa-chevron-up"></i></p>
                        {isContentVisible && <p className='description__content'>{props.content}</p>}
                    </div>
    );
}