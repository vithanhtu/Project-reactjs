import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { ProductContext } from '../context';

const Product = () => {
    const valueContext = useContext(ProductContext)
    const {menuItems, handleDetails, addToCart} = valueContext

    return (
        <div className='menu-box'>
         {menuItems.map((item, index) => {
            const {id, title, img, status, price} = item;

            return (
              <article key={id} className='menu-item'>
                <Link to="/details" onClick={() => handleDetails(id, index)}>
                  <img src={img} alt={title} className='menu-item-img' />
                </Link>
                <div className='item-info'>
                    <h4>{title}</h4>
                    <span className='price'>${price}</span>
                </div>
                <div>
                {status 
                  ? <button className="menu-btn" onClick={() => addToCart(id, index)}>Add To Cart</button>
                  : <Link to="/details">
                      <button className="menu-btn">Read more</button>
                    </Link>
                  }
                </div>
              </article>
            );
          })}
        </div>
      );
};

export default Product;