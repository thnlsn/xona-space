import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem';

// Importing all image paths from the database file
import { logos } from '../../data/database';
// Destructuring the images we need for this component
const { logo } = logos;

const Navigation = ({ items }) => {
  const [scrolled, setScrolled] = useState(false);

  const changeScrolled = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener('scroll', changeScrolled);

  return (
    <nav className={`navigation ${scrolled ? 'active' : ''}`}>
      {/* This is set up to route to the homepage, as that is what is first in the array */}
      <Link to={items[0].path}>
        <img src={logo} alt='Xona Logo' className='navigation__brand'></img>
      </Link>

      <ul className='navigation__list'>
        {items.map((item, index) => (
          <NavItem
            item={item.name}
            path={item.path}
            exact={item.exact}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
