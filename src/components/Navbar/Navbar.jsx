import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { shopContext } from '../../context/ShopContext';
const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const{getTotalCartItems} = useContext(shopContext)
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  return (
    <div className='new'>
      <div className='navbar2'>
        <div className='sidebar'>
          <ul className='nav-menu2'>
           
            <li
              onClick={() => {
                hideSidebar();
                setMenu('shop');
              }}
            ><a href="#">

              <img src='./close.png' alt='' />
            </a>
              <Link style={{ textDecoration: 'none' }} to='/'>
                Shop
              </Link>{' '}
              {menu === 'shop' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('mens');
              }}
            >
              <Link style={{ textDecoration: 'none' }} to='/mens'>
                Men
              </Link>
              {menu === 'mens' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('womens');
              }}
            >
              <Link style={{ textDecoration: 'none' }} to='/womens'>
                Women
              </Link>
              {menu === 'womens' ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu('kids');
              }}
            >
              <Link style={{ textDecoration: 'none' }} to='/kids'>
                Kids
              </Link>
              {menu === 'kids' ? <hr /> : <></>}
            </li>
          </ul>
          <div className='nav-login-cart'>
            <Link to='login'>
              <button>Login</button>
            </Link>
          </div>

          <Link to='/cart'>
            {' '}
            <img src={cart_icon} alt='' />
          </Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>

      {/* navbar  */}
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='' />
          <p>SHOPPER</p>
        </div>
        <ul className='nav-menu hide'>
          <li
            onClick={() => {
              setMenu('shop');
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/'>
              Shop
            </Link>{' '}
            {menu === 'shop' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('mens');
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/mens'>
              Men
            </Link>
            {menu === 'mens' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('womens');
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/womens'>
              Women
            </Link>
            {menu === 'womens' ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu('kids');
            }}
          >
            <Link style={{ textDecoration: 'none' }} to='/kids'>
              Kids
            </Link>
            {menu === 'kids' ? <hr /> : <></>}
          </li>
        </ul>
        <div className='nav-login-cart hide'>
          <Link to='login'>
            <button>Login</button>
          </Link>
          <Link to='/cart'>
            {' '}
            <img src={cart_icon} alt='' />
          </Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
        <li className='menu' onClick={showSidebar}>
          <a href='#'>
            <img src='./manu.png' alt='' />
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
