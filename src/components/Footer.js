import React from 'react';
import './CSS/Footer.css'
import {BiMap} from 'react-icons/bi'
import {BiTimeFive} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <h2>About us</h2>
                    <p>Visit our restaurant to experience our relaxing atmosphere, to find a peace of mind and to enjoy our diverse, delicious, gourmet menu. Our extensive choice of side and main dishes and appetizers, as well as NA and alcoholic beverages are made to make your taste buds happy!</p>
                </div>
                <div className="footer-item">
                    <h2>Contact us</h2>
                   <div className="footer-info">
                      <div className="footer-info-item">
                        <span><BiMap/></span>
                        <span>6087 Richmond hwy, Alexandria, VA</span>
                      </div>
                      <div className="footer-info-item">
                        <span><BiTimeFive/></span>
                        <span>Mo-Fr 11:00-00:00, Sa-Sa 15:00-00:00</span>
                      </div>
                      <div className="footer-info-item">
                        <span><AiOutlinePhone/></span>
                        <span>703 329 0632</span>
                      </div>
                      <div className="footer-info-item">
                        <span><FiMail/></span>
                        <span>info@demolink.org</span>
                      </div>
                   </div>
                </div>
            </div>
            <div className="footer-social">
                <div className="footer-social-wrap">
                    <div className="footer-social-item">
                        <p>Zemez ©. All rights reserved.</p>
                    </div>
                    <div className="footer-social-item">
                        <span><FaFacebookSquare/></span>
                        <span><AiFillTwitterSquare/></span>
                        <span><AiFillLinkedin/></span>
                        <span><AiFillInstagram/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;