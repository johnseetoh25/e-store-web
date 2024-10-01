"use client"

import ProductCard from '@/components/product_card/product-card'
import style from '@/app/products/page.module.css'
import { products } from '@/lib/product-data'
import { useCart } from '@/contexts/cartContext'

const ProductsPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <div className={`${style.products_grid_layout}`}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} addToCart={() => addToCart(product)}/>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
