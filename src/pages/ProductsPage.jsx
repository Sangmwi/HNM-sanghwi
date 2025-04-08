import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/sangmwi/HNM-sanghwi/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [])
  



  return (
    <div className='product-list' style={{ width: '80%', margin: '0 auto' }}>
      {products.map((item, index) => (
          <ProductCard item={item} key={index} />
      ))}
    </div>
  )
}

export default ProductsPage