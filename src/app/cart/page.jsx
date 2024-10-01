"use client"

import React from 'react'
import style from '@/app/cart/page.module.css'
import ReceiveAddressCard from '@/components/receive_payment_card/receive-address-card'
import Image from 'next/image';
import { useCart } from '@/contexts/cartContext';

function ProductDetailsLayout({item}){
  return(
    <div className={`${style.product_details_layout}`}>
      <Image src="/huawei mate 50.jpg" className={`${style.product_image}`} alt="huawei mate 50" width={500} height={500} />
      <div>
        <h2>{item.title}</h2>
        <input type="number" value={item.quantity}/>
      </div>
    </div>
  );
}

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const finalTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`${style.cart_page_layout}`}>
      <div className={`${style.cart_collection_layout}`}>
        <h2>Cart Lists</h2>
        <table className={`${style.cart_table_layout}`}>
          <thead>
            <tr> 
              <td style={{ width: '5%'}}><input type="checkbox" name="" id="" /></td>
              <td style={{ width: '60%'}}>product details</td>
              <td style={{ width: '15%'}}>prices</td>
              <td style={{ width: '15%'}}>total</td>
              <td style={{ width: '5%'}}>action</td>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              <>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td><input type="checkbox" name="" id=""/></td>
                  <td><ProductDetailsLayout item={item}/></td>
                  <td>RM {item.price}</td>
                  <td>RM {(item.price * item.quantity).toFixed(2)}</td>
                  <td><button onClick={() => removeFromCart(item.id)}>remove</button></td>
                </tr>
              ))}
              </>
            ):(
              <tr>
                <td colSpan={5}>cart are not products</td>
              </tr>
            )}
            <tr>
              <td colSpan={3}>final total:</td>
              <td>RM {finalTotal.toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={`${style.cart_information_layout}`}>
        <ReceiveAddressCard/>
        <div className="action-button-bar">
          <button>Go Paying</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
