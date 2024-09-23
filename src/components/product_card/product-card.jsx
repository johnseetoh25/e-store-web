import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import style from '@/components/product_card/product-card.module.css'

export default function ProductCard() {
  return (
    <div className={`${style.product_card_layout}`}>
      <div className={`${style.product_media_layout}`}>
        <Image src="/huawei mate 50.jpg" alt="huawei mate 50" className={`${style.product_image}`} width={500} height={500}/>
      </div>
      <div className={`${style.product_info_layout}`}>
        <h3>Product Name</h3>
      </div>
      <div className={`${style.product_action_layout}`}>
        <Link href={'/products/detail'} className={`${style.product_action_button}`}><button >view more</button></Link>
        <button className={`${style.product_action_button}`}>add cart</button>
      </div>
    </div>
  )
}
