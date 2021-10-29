import React, { createContext, useState } from 'react';
import products from './data/menu'


export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const allCategories = ['all', ...new Set(products.map((item) => item.category))]
    const [menuItems, setMenuItems] = useState(products)
    const [categories, setCategories] = useState(allCategories)
    const [detailsProduct, setDetaiProduct] = useState(products[0])
    const [cartItem, setCartItem] = useState([])
    const [indexItem, setIndexItem] = useState()
    const qtyItems = cartItem.reduce((init, current) => init + current.qty, 0)
    const itemPrice = cartItem.reduce((init, current) => init + (current.qty * current.price), 0)
    const taxPrice = itemPrice * 0.14
    const totalPrice = itemPrice + taxPrice


    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(products);
            return;
        }
        const newItems = products.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product
    }
    
    const handleDetails = (id, index) => {
        const product = getItem(id)
        setDetaiProduct(product)
        setIndexItem(index)
    }

    const removeItem = (id) => {
        const newCart = cartItem.filter(item => item.id !== id);
        setCartItem(newCart)
        return newCart
    }

    const clearCart = () => {
        setCartItem([])
    }


    const addToCart = (id, index) => {
        const tempProduct = [...menuItems]
        const product = tempProduct[index]
        const duplicate = cartItem.find((item) => item.id === id)

        if(duplicate) {
            setCartItem(
                cartItem.map((item) => {
                   return item.id === id ? {...duplicate, qty: duplicate.qty + 1} : item   
                })
            )
        } else setCartItem([...cartItem, {...product, qty: 1}])
    }  

    

    const countItemRevemo = (id) => {
        const duplicate = cartItem.find((item) => item.id === id)

        if(duplicate.qty > 1) {
            setCartItem(
                cartItem.map((item) => {
                   return item.id === id ? {...duplicate, qty: duplicate.qty - 1} : item   
                })
            )
        } else return duplicate.qty = 1
    }  


    const findProducts = (value) => {
        const values = value.toLowerCase()
        const cloneMenu = [...menuItems]
        if(values) {
            setMenuItems(
                cloneMenu.filter((item) => {
                  return item.title.toLowerCase().includes(values)
                })
            )
        } else setMenuItems(products)
    }




   

    const dataContext = {
        menuItems,
        categories,
        allCategories,
        filterItems,
        detailsProduct,
        handleDetails,
        cartItem,
        addToCart,
        removeItem,
        itemPrice,
        taxPrice, 
        totalPrice,
        countItemRevemo,
        clearCart,
        findProducts,
        indexItem,
        qtyItems
    }




    return (
        <ProductContext.Provider value={dataContext}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;