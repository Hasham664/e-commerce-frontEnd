import React, { useContext } from 'react'
import './CartItems.css';
import { shopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const { getTotalAmount,all_product, cartItems, removeFromCart } =
      useContext(shopContext);


      console.log(getTotalAmount(), cartItems);
  return (
    <div className='cartitems container'>
      <div className='cartitems-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className='carticon-remove-icon'
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=''
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>cart Totals</h1>
          <div>
            <div className='cartitems-total-items'>
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className='cartitems-total-items'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-items'>
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>if you have a promocode, Enter it here</p>
          <div className='cartitems-promobox'>
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems