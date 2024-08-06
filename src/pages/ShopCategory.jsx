import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { shopContext } from '../context/ShopContext'
import dorpdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(shopContext)
  return (
        <div className='container'> 
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt='' />
        <div className='shopcategory-indexShort'>
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className='shopcategory-short'>
            sort by <img src={dorpdown_icon} alt='' />
          </div>
        </div>
        <div className='shopcategory-products'>
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </div>
  );
}

export default ShopCategory