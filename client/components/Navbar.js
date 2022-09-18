import * as React from 'react';
import MenuItems from './MenuItems.jsx';                       
import { menuItems } from './menuItems.js';

const Navbar = () => {
    return (
        <nav>
        <ul className="menus">
            {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
            })}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;