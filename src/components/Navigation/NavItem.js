import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ item, path }) => {
  return (
    <Fragment>
      <NavLink to={path} className='navigation__item'>
        {item}
      </NavLink>
    </Fragment>
  );
};

export default NavItem;
