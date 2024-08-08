import React, { useState } from "react";
import "./dropdownMenu.scss"

 export default function DropdownMenu(props){
    const [isContentVisible, setIsContentVisible] = useState(false)
    const { title, content } = props
    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }
    return(
        <div className='appartment__description'>
                        <p className='description__header'>
                            <span>{title}</span>
                            <i className="fa-solid fa-chevron-up" onClick={showContent}></i></p>
                        {isContentVisible &&<p className='description__content'>{content}</p>}
                    </div>
    );
}