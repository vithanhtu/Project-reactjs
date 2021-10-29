import React, { useState } from 'react';
import './CSS/TourItem.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai'


const TourItem = ({tour}) => {
    const {name, title, img, desc} = tour
    const [readMore, setReadMore] = useState(false)

    return (
        <div className="about-chef">
            <div className="about-chef-image">
                <img src={img}></img>
            </div>
            <div className="about-chef-item">
                <h2>{name}</h2>
                <p>{title}</p>
                <div className="chef-item-text">
                    <p>{readMore ? desc : `${desc.substring(0, 230)}...`}</p>
                </div>
                <button className="hide-chef-desc" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'less' : 'more'}
                </button>
                <div className="about-social">
                    <span><FaFacebookF /></span>
                    <span><AiOutlineTwitter /></span>
                    <span><AiOutlineInstagram /></span>
                </div>
            </div>
        </div>
    );
};

export default TourItem;