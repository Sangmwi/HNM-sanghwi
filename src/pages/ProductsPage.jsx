import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

const ProductsPage = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/sangmwi/HNM-sanghwi/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products])

  return (
    <div className='product-list' style={{ width: '80%', margin: '0 auto' }}>
      {filteredProducts.map((item, index) => (
          <ProductCard item={item} key={index} />
      ))}
    </div>
  )
}

export default ProductsPage