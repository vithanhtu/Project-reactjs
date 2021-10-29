import React, { useContext, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi'
import './CSS/Search.css'
import { ProductContext } from '../context';

const Search = () => {
    const valueContext = useContext(ProductContext)
    const {findProducts} = valueContext
    const [value, setValue] = useState('')


    const onHandleChange = (e) => {
        const target = e.target
        setValue(target.value)
        findProducts(target.value)
    }

    return (
        <div className="search-box">
            <input value={value} onChange={onHandleChange} className="search-input" placeholder="Search products"/>
            <span><BiSearchAlt /></span>
        </div>
    );
};

export default Search;