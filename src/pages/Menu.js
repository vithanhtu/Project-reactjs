import React from 'react';
import Categories from '../components/Categories';
import Product from '../components/Product';
import './CSS/Menu.css'
import Search from '../components/Search'

const Menu = () => {
    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Search/>
          <br/>
          <br/>
          <Categories />
          <Product/>
        </section>
      </main>
    );
};

export default Menu;