import React from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import styles from './header.module.css';

const Header = () => (
  <div className={styles.header}>
    <div className="container">
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <Link to={{ pathname: SHOP_ROUTE }}>Главная</Link>
          </li>
          <li className={styles.menu__item}>
            <Link to={{ pathname: LOGIN_ROUTE }}>Войти</Link>
          </li>
          <li className={styles.menu__item}>
            <Link to={{ pathname: ADMIN_ROUTE }}>Панель администратора</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
