import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ item, path, exact }) => {
  return (
    <Fragment>
      {exact ? (
        <NavLink
          exact
          to={path}
          className='navigation__item'
          activeClassName='navigation__item--selected'
          activeStyle={{
            borderBottom: '1px solid currentColor',
          }}
        >
          {item}
        </NavLink>
      ) : (
        <NavLink
          to={path}
          className='navigation__item'
          activeClassName='navigation__item--selected'
          activeStyle={{
            borderBottom: '1px solid currentColor',
          }}
        >
          {item}
        </NavLink>
      )}
    </Fragment>
  );
};

export default NavItem;
