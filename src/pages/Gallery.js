import React from 'react';
import './CSS/Gallery.css'
import img1 from '../image/gallery_img_1.jpg'
import img2 from '../image/gallery_img_2.jpg'
import img3 from '../image/gallery_img_3.jpg'
import img4 from '../image/gallery_img_4.jpg'
import img5 from '../image/gallery_img_5.webp'
import img6 from '../image/gallery_img_6.jpg'
import img7 from '../image/gallery_img_7.jpg'
import img8 from '../image/gallery_img_8.jpg'


const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-image">
                <h1>Atmosphere Matters</h1>
            </div>
            <div className="gallery-text">
                <h2>Our interior </h2>
                <p>Do you value relaxing, friendly atmosphere? Our interior will sway your mood! The Bettaso restaurant offers two different dining halls (one big and one a bit more intimate), with tables varying in size (for 2, 4 or 8 guests). Additionally we have a wide bar desk with high chairs, a welcoming space for enjoying your drink!</p>
            </div>
            <div className="image-container">
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img1}></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img2}></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img3}></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img4}></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img5}></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img6}></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img7}></img>
                </div>
                <div className="image-item">
                    <div className="overlay"></div>
                    <img src={img8}></img>
                </div>
            </div>
        </div>
    );
};

export default Gallery;