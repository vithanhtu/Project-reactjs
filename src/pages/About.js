import React from 'react';
import './CSS/About.css'
import Prize from '../components/Prize'
import AboutTours from '../components/AboutTours';
import img1 from '../image/about-1.jpg'
import img2 from '../image/about-2.jpg'


const About = () => {

    return (
        <div className="about"> 
        <div className="about-wrap">
        <div className="about-image">
                <img src={img1}></img>
            </div>
            <div className="about-title">
                <h2>Bettaso is a place defined by our main philosophy. Which is to keep things simple, tasty and create a home-like cozy atmosphere for our Restaurant’s visitors.</h2>
            </div>
            <Prize/>
            <div className="about-title">
                <p>Coming to us for a lunch or a dinner should feel just as comfortable, as having one at home. The simplicity, freshness and reasonable pricing for our dishes just underlines how home-like our Restaurant is..</p>
            </div>
            <div className="about-image">
                <img src={img2}></img>
            </div>
            <div className="about-content">
                <h2 className="about-content-title">Meet our team</h2>
                    <h3>Bettaso is a family owned Restaurant, which treasures the atmosphere just as much as the dining menu. We assembled a strong team of professionals, all of whom aspire to constantly excel and step it up!</h3>
                    <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p className="content-text">This team has been assembled coming from absolutely different backgrounds. It’s most noticeable when we compare Mary and her two sous chefs. Mary’ been studying and working the art of cooking in Paris while Thomas and Simon had a more local experience in the US Restaurants.</p>
                    <p className="content-text">Both Simon and Thomas came from a more local experience of contemporary, mixed American cuisine.</p>
                    <p className="content-text">These differences help them to work incredibly efficiently as one team.</p>
                    <p className="content-text">They compliment each other’s experiences and skills! Together in this cooking collaboration, they created our unique, diverse menu as it is.</p>
                    <p className="content-text">We’re really proud to recognize that this menu is a truly modern take on food. A menu, where there are national dishes from different countries, mixed up and adapted to an American contemporary setting.</p>
                    <p className="content-text">Even more importantly, each of our culinary talents focuses within their own specific kitchen department…</p>
                    <p className="content-text">Like Thomas Palmer does, giving Mary and Simon a hand when it comes to desserts. And no one cooks those mouth-watering, delightful desserts better than him!</p>
                    <p className="content-text">All in all, we very much owe to Bettaso’s team diversity and the teamwork we have here. These ingredients make us the best</p>
                    <br/>

                <AboutTours/>
                <div className="chef-contact">
                    <h2>Thomas Palmer</h2>
                    <p>Washington Post – Feature</p>
                    <p>City Paper – Review</p>
                    <p>Alexandria Sun – Review</p>
                    <p>City Paper – Soft Opening Gallery</p>
                </div>
            </div>
        </div>
        <div className="chef-footer">
                <p className="chef-footer-text">View</p>
                <span className="chef-footer-text">The Menus</span>
                <p className="chef-footer-text">and</p>
                <span className="chef-footer-text">Make A Reservation</span>
            </div>
        </div>
    );
};

export default About;