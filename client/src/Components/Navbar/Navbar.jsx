import React, { useState } from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";

import "./Navbar.scss";
import Cart from '../Cart/Cart';

const Navbar = () => {
  const products = useSelector(state=>state.cart.products)
  const [open,setOpen] = useState(false);
  return (
    <div className='navbar'>
      <div className="wraper">
        <div className="left">
          <div className="item">
            <NavLink className='Navlink' to="/">Home</NavLink>
          </div>
          <div className="item">
            <NavLink className='Navlink' to="/products/2">Women</NavLink>
          </div>
          <div className="item">
            <NavLink className='Navlink' to="/products/1">Men</NavLink>
          </div>
          <div className="item">
            <NavLink className='Navlink' to="/products/3">Children</NavLink>
          </div>
        </div>
        <div className="center">
          <NavLink className='Navlink' to='/'>LUXURYSTORE</NavLink>
        </div>
        <div className="right">
          <div className="item">
            <NavLink className='Navlink' to="/">About</NavLink>
          </div>
          <div className="item">
            <NavLink className='Navlink' to="/">Contact</NavLink>
          </div>
          <div className="item">
            <NavLink className='Navlink' to="/">Stores</NavLink>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar;