import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../store/productStore';
import CartItem from './CartItem';
import { Button, Modal } from 'flowbite-react';

const Cart = ({cartOpen,setCartOpen}) => {
    const navigate = useNavigate()
    const {cart} = useProductStore()
    const total = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.qty,0)
    return (
        <Modal
        show={cartOpen}
        size="2xl"
        position="top-right"
        onClose={()=>setCartOpen(false)}
      >
        <Modal.Header>
          Cart
        </Modal.Header>
        <Modal.Body>
          {
            !cart.length > 0 ?
             <h1 className='text-center'>Cart is empty</h1> : 
             <>
              <div>
                {cart.map((product) => <CartItem key={product.id} {...{ product }} />)}
              </div>
              <div>
                <p className='flex justify-between items-center pr-8'>
                  <span>Total</span>
                  <span>{total} /-</span>
                </p>
              </div>
              <div className='flex justify-end'>
                <button 
                  onClick={() => navigate('/order')} 
                  className='px-4 py-2 bg-blue-500 text-white rounded-md'
                  >
                    Place order
                  </button>
              </div>
            </>
          }
        </Modal.Body>
      </Modal>
    );
};

export default Cart;