import React, { useState } from 'react';
import AllSalesPage from '../../pages/AllSalesPage/AllSalesPage';
import MainPage from '../../pages/MainPage/MainPage';

import AllProductsPage from '../../pages/AllProductsPage/AllProductsPage';
import DiscountProducts from '../DiscountProducts/DiscountProducts';
import s from './index.module.css';

export default function Transition() {
    const [activeLink, setActiveLink] = useState("");
    
    const handleClick = (page) => {
        setActiveLink(page);
    };

    const components = {
        "Main page": <MainPage />,
        "Categories": <AllProductsPage/>,
        "Tools and equipment": <AllSalesPage />,
        "Secateurs": <DiscountProducts />
    };

    return (
        <div className={s.mainDiv}>
            <div className={s.containerButtons}>
            <button
                onClick={() => handleClick("Main page")}
                className={s.btn}
            >
                Main page
            </button>
            <button
                onClick={() => handleClick("Categories")}
                className={s.btn}
            >
                Categories
            </button>
            <button
                onClick={() => handleClick("Tools and equipment")}
                className={s.btn}
            >
                Tools and equipment
            </button>
            <button
                onClick={() => handleClick("Secateurs")}
                className={s.btn}
            >
                Secateurs
            </button>
            <div className={s.rest}></div>
            </div>
            
            <div>
                {components[activeLink] || null}
            </div>
        </div>
    );
}
