import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/sangmwi/HNM-sanghwi/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProducts(data);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getProducts();
  }, [searchQuery]);
  



  return (
    <div className='product-list'>
      <input
        type='text'
        placeholder='검색...'
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      {products.map((item, index) => (
          <ProductCard item={item} key={index} />
      ))}
    </div>
  )
}

export default ProductsPage