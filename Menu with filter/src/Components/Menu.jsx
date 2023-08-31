import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menus }) => {
  return (
    <section className='section-center'>
      {menus.map((menu) => {
        return <MenuItem key={menu.id} {...menu} />;
      })}
    </section>
  );
};

export default Menu;
