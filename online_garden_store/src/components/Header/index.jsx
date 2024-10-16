import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';


const Header = () => {
  return (
    <div className={s.headerContainer}>
      <h1 className={s.title}>Categories</h1>
      <div className={s.line}></div>
      <div className={s.rectangle}>
       
        <Link to="/categories/all" className={s.rectangleText}>
          All Categories
        </Link>
      </div>
    </div>
  );
};

export default Header;