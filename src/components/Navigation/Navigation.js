import React from 'react';
import NavItem from './NavItem';

const Navigation = ({ items }) => {
  return (
    <nav className='navigation'>
      <div className='navigation__brand'></div>
      <ul className='navigation__nav'>
        {items.map((item) => (
          <NavItem item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
