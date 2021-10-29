import React, { useState } from 'react';
import './CSS/Home.css'
import {Link} from "react-router-dom";
import Prize from '../components/Prize';
import ReviewSlide from '../components/ReviewSlide';
import Menu from './Menu';
import img1 from '../image/showcase_bg.jpg'
import img2 from '../image/img-slide-1.jpg'
import img3 from '../image/img-slide-2.jpg'
import img4 from '../image/img-slide-3.jpg'
import img5 from '../image/img-slide-4.jpg'



const Home = () => {

    const [values, setValues] = useState('')
    const [valid, setValid] = useState(false)
   
    const handleChange = (e) => {
        const {value} = e.target

        setValid(false)
        setValues(value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   

        if(!regexEmail.test(values)) {
            setValid(true)
        } else {
            alert('Success')
            console.log(values)
        }
    }





    return (
        <div className="home">
            <div className="home-inner">
                <img src={img1} alt="img-inner"></img>
                <div className="home-inner-content">
                    <div className="inner-content-title">
                        <div>
                            <h2>The most praised gourmet restaurant</h2>
                            <h1>In the heart of Washington</h1>
                        </div>
                        <div>
                            <p>A place where food and coziness compliment each other.</p>
                            <p>Call (555)123-4567</p>
                        </div>
                    <div className="home-inner--book-line">
                        <Link to="/contact">
                            <button className="book-btn">
                                <span>BOOK ONLINE</span>
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

            <Prize></Prize>

            <div className="home-about">
                <article className="home-about-content">
                    <section className="home-about-content-item">
                        <div>
                        <h1>A mix of traditional and modern cuisine</h1>
                        <p>While we stay true to the traditional recipes and the relaxed atmosphere, our restaurant also aspires to constantly add fusion-style.</p>
                        <h2>“Bettaso restaurant is just like life: a working mix of old and new approaches, but in culinary business.”</h2>
                        </div>
                        <div className="about-btn">
                            <Link to="/about">ABOUT US</Link>
                        </div>
                    </section>
                    <section className="home-about-content-item">
                       <div className="home-about-content-item-text">
                        <p>Error validating access token: The session has been invalidated because the user changed their password or Facebook has changed the session for security reasons</p>
                       </div>
                    </section>
                </article>
            </div>

            <div className="slide-container">
                <section className="slide-item">
                    <div className="slide-item-overlay">
                        <div className="slide-item-content">
                            <h1>Startes</h1>
                            <p>The start of any meal is so important... So brace your appetite, while waiting for your main course. Our diverse and delicious appetizers will help you with that!...</p>
                        </div>
                    </div>
                    <img src={img2} alt="slide"></img>
                </section>
                <section className="slide-item">
                    <div className="slide-item-overlay">
                        <div className="slide-item-content">
                            <h1>Main Courses</h1>
                            <p>Bettaso's menu knows no borders and nationalities. At the core of our main courses roaster, we have the idea of a cosmopolitan, contemporary cuisine. So whether you'll pick a meat, fish or vegetarian main course, be sure that it will be universally good!...</p>
                        </div>
                    </div>
                    <img src={img3} alt="slide"></img>
                </section>
                <section className="slide-item">
                    <div className="slide-item-overlay">
                        <div className="slide-item-content">
                            <h1>Desserts</h1>
                            <p>That sweet taste of a dessert at the end of the meal... If you look forward to it too, then you're at the right place! Our menu has prolific choice of desserts. It can make even the prolific sweet tooth person happy!...</p>
                        </div>
                    </div>
                    <img src={img4} alt="slide"></img>
                </section>
                <section className="slide-item">
                    <div className="slide-item-overlay">
                        <div className="slide-item-content">
                            <h1>Drinks</h1>
                            <p>Refresh yourself while enjoying a flavorsome dinner or a lunch at our place. We at the Bettaso offer different beverages as well as spirits, and liquors!...</p>
                        </div>
                    </div>
                    <img src={img5} alt="slide"></img>
                </section>
            </div>
            <ReviewSlide></ReviewSlide>
            <div className="menu-wrap"><Menu></Menu></div>

            <div className="home-chef">
                <div className="chef-info">
                    <h2>Looking for a gourmet experience?</h2>
                    <h5>We have it all here!</h5>
                    <p>The team that works at our kitchen, values diversity. <br></br>
                    We can offer you a traditional dish with nouvelle ingredients!</p>
                    <span>Mr. Simon Wicked</span>
                </div>
            </div>
            <div className="home-gallery">
                <div className="gallery-container">
                    <h2>Do you value relaxing, friendly atmosphere?</h2>
                    <h3>Our interior will sway your mood!</h3>
                    <p>The Bettaso restaurant offers a cozy, home-like atmosphere to help you enjoy your dinner and have a peace of mind… We assembled a strong team of professionals, all of whom aspire to constantly excel and step it up!!</p>
                    <Link to="/gallery"><button>Gallery</button></Link>
                </div>
            </div>
            <div className="opinion">
                <div className="opinion-container">
                    <div className="opinion-content">
                        <h2>Do You Like Tasty Food?</h2>
                        <p>Stay updated with the latest new dishes on our menu, special offers and Restaurant’s events!</p>
                    </div>
                    <form className="opinion-subscrice" onSubmit={handleSubmit}>
                        <input 
                            className={valid ? "subscrice-input border-error" : "subscrice-input"}
                            placeholder="Tour email here"
                            onChange={handleChange} 
                            value={values} 
                        ></input>
                        {valid ?  
                            <div>
                                <p className="message-error">Please specify a valid e-mail</p>
                            </div> : ''
                        }
                        <button type="submit" className="subscrice-btn">Subscrice</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;