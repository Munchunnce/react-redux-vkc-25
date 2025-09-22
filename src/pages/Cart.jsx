import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  }
  return (
    <div className='cartWapper'>
      {
        cartItems.length === 0 ? (<h3>Cart is empty 🛒</h3>)
        :
        (
          cartItems.map((item) => (
            <div className='cartCard' key={item.id}>
              <img src={item.image} alt=""/>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            <button
              className="btn"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Cart;
