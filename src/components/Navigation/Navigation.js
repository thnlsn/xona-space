import React from 'react';

import { Link } from 'react-router-dom';

import NavItem from './NavItem';

import logo from '../../images/xona-logo.png';

const Navigation = ({ items }) => {
  return (
    <nav className='navigation'>
      {/* This is set up to route to the homepage, as that is what is first in the array */}
      <Link to={items[0].path}>
        <img src={logo} alt='Xona Logo' className='navigation__brand'></img>
      </Link>

      <ul className='navigation__list'>
        {items.map((item) => (
          <NavItem item={item.name} path={item.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
