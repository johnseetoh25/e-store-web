'use client'
import { getProduct } from '@/lib/product-data';
import React from 'react'
import style from '@/app/products/[slug]/SlugPage.module.css'
import Image from 'next/image';
import { useCart } from '@/contexts/cartContext';

const ProductDetailPage = ({params}) => {
  const { slug } = params;
  const product =  getProduct(slug);

  const { addToCart } = useCart();

  return (
    <div className={`${style.product_detail_page_layout}`}>
      <div className={`${style.product_media_layout}`}>
        <Image src="/huawei mate 50.jpg" alt="huawei mate 50" className={`${style.product_image}`} width={500} height={500}/>
      </div>
      <div className={`${style.product_info_layout}`}>
        <h2>{product?.title}</h2>
        <p>RM {product?.price.toFixed(2) - 0.01}</p>
       
        <button onClick={() => addToCart(product)} className={`${style.product_action_button}`}>add cart</button>
      </div>

    </div>
  )
}

export default ProductDetailPage
