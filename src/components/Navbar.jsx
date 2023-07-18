import React from 'react'
import { Menu } from 'semantic-ui-react';
import { logo } from '../constants/constant';
import { Link } from 'react-router-dom';
import CartButton from '../pages/CartButton';

const Navbar = () => {
  return (
 <>
 <Menu borderless fixed='top'>
    <Menu.Item>
        <img src={logo} alt ="logo" style={{width:50}}/>
    </Menu.Item>
    <Menu.Item name ="Home" as={Link} to="/"/>
    <Menu.Item name ="Recipe"as={Link} to="/recipes"/>
    <CartButton/>
 </Menu>
 
 </>
  )
}

export default Navbar