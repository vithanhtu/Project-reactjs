import React, { useContext } from 'react';
import { ProductContext } from '../context';
import './CSS/Cart.css'
import {MdDelete} from 'react-icons/md'

const Cart = () => {
    const valueContext = useContext(ProductContext)
    const productItems = valueContext.cartItem
    const {itemPrice, taxPrice, totalPrice, removeItem, addToCart, countItemRevemo, clearCart} = valueContext


    return (
        <>
        <div className="cart-wrap">
        <h1 className="cart-wrap-title">Your Cart</h1>
            {productItems.map((item, index) => {
                const {id, title, img, price, qty} = item

                return (
                    <div className="cart-product" key={index}>
                        <div className="cart-product-img">
                            <h3>Products</h3>
                            <img src={img} alt={title}/>
                        </div>
                        <div className="cart-product-title">
                            <h3>Name of product</h3>
                            <p>{title}</p>
                        </div>
                        <div className="cart-product-price"> 
                            <h3>Price</h3>
                            <p>${price}</p>
                        </div>
                        <div className="cart-product-quanlity">
                            <h3>Quanlity</h3>
                            <button className="remove" onClick={() => countItemRevemo(id, index)}>-</button>
                            <button className="number">{qty}</button>
                            <button className="number" onClick={() => addToCart(id, index)}>+</button>
                        </div>
                        <div>
                            <h3>Remove</h3>
                            <MdDelete className="remove-icon" onClick={() => removeItem(id)}></MdDelete>
                        </div>
                        <div className="cart-product-total">
                                <h3>Item Total</h3>
                            <strong>
                            <span>{qty} x </span>
                                <span>${price}</span>
                            </strong>
                        </div>
                    </div>
                )
            })}

            <div className="cart-footer">
                <div className="cart-footer-total">
                    <button onClick={clearCart}>Clear Cart</button>
                    <h2>SubTotal: <span>${itemPrice.toFixed(2)}</span></h2>
                    <h2>Tax: <span>${taxPrice.toFixed(2)}</span></h2>
                    <h2>Total: <span>${totalPrice.toFixed(2)}</span></h2>
                </div>
            </div>
            </div>
        </>
    );
};

export default Cart;