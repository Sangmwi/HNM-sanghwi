import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import './ProductDetailPage.css'

const ProductDetailPage = ({ isLoggedIn }) => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')

  useEffect(() => {
    const getProductDetail = async () => {
      let url = `https://my-json-server.typicode.com/sangmwi/HNM-sanghwi/products/${id}`
      let response = await fetch(url)
      let data = await response.json()
      setProduct(data)
    }
    getProductDetail()
  }, [id])

  if (!isLoggedIn) return <Navigate to="/login" />
  if (!product) return <LoadingSpinner />

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-content">
          <div className="product-image">
            <img 
              src={product.img} 
              alt={product.title}
            />
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-price">{product.price.toLocaleString()}원</p>
            
            {product.choice && (
              <span style={{ color: 'green', marginRight: '10px' }}>
                [Conscious Choice]
              </span>
            )}
            {product.new && (
              <span style={{ color: 'red' }}>
                [New]
              </span>
            )}

            <div className="size-selection">
              <h3>사이즈</h3>
              <div className="size-buttons">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="purchase-button">
              장바구니에 추가
            </button>

            <div className="product-description">
              <h3>상품 설명</h3>
              <p>
                {product.title}은(는) 매우 좋은 제품입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage