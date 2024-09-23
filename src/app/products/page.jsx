import ProductCard from '@/components/product_card/product-card'
import React from 'react'
import style from '@/app/products/page.module.css'

const ProductsPage = () => {
  return (
    <div>
      <div className={`${style.products_grid_layout}`}>
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
