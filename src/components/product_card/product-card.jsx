import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import style from '@/components/product_card/product-card.module.css'

export default function ProductCard({product, addToCart}) {

  return (
    <div className={`${style.product_card_layout}`}>
      <div className={`${style.product_media_layout}`}>
        <Image src="/huawei mate 50.jpg" alt="huawei mate 50" className={`${style.product_image}`} width={500} height={500}/>
      </div>
      <div className={`${style.product_info_layout}`}>
        <h2>{product.title}</h2>
        <span>RM {product.price.toFixed(2) - 0.01}</span>
      </div>
      <div className={`${style.product_action_layout}`}>
        <Link href={`/products/${product.id}`} className={`${style.product_action_button}`}><button >view more</button></Link>
        <button onClick={addToCart} className={`${style.product_action_button}`}>add cart</button>
      </div>
    </div>
  )
}
