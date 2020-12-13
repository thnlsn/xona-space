import React from 'react';
import NavItem from './NavItem';

import logo from '../../images/xona-logo.png';

const Navigation = ({ items }) => {
  return (
    <nav className='navigation'>
      <img src={logo} alt='Xona Logo' className='navigation__brand'></img>
      <ul className='navigation__list'>
        {items.map((item) => (
          <NavItem item={item.name} path={item.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
