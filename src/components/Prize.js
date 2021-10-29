import React from 'react';
import './CSS/Prize.css'
import {AiOutlineStar} from 'react-icons/ai'
import icon1 from '../image/icon-1.webp'
import icon2 from '../image/icon-2.webp'
import icon3 from '../image/icon-3.webp'
import icon4 from '../image/icon-4.webp'



const Prize = () => {
    return (
        <div className="prize">
            <article className="prize-wrap">
                <section className="prize-item">
                    <img src={icon1} alt="prize-img"></img>
                    <p>Open Table Dinners</p>
                    <div>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                    </div>
                </section>
                <section className="prize-item">
                    <img src={icon2} alt="prize-img"></img>
                    <p>Open Table Dinners</p>
                    <div>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                    </div>
                </section>
                <section className="prize-item">
                    <img src={icon3} alt="prize-img"></img>
                    <p>Open Table Dinners</p>
                    <div>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                    </div>
                </section>
                <section className="prize-item">
                    <img src={icon4}></img>
                    <p>Open Table Dinners</p>
                    <div>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                        <span><AiOutlineStar className="prize-item-star"/></span>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default Prize;