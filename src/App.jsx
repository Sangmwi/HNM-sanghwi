
import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import LoginPage from './pages/LoginPage'
import ProductDetailPage from './pages/ProductDetailPage'
import Navbar from './components/Navbar'


//1. 전체상품페이지, 로그인, 상품상세페이지
//2. 전체상품페이지에는 전체상품을 보여준다
//3. 로그인 버튼 누르면 로그인페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인되지 않을경우 로그인페이지가 나온다
//5. 로그인이 되어있으면 상품 디테일 페이지를 볼 수 있다.
//6. 로그인이 되어있으면 대신 로그아웃버튼이 나타난다.
//7. 로그이웃이 되면 상품 디테일 페이지를 볼 수 없고 다시 로그인해야한다.
//8. 상품을 검색할 수 있다.




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/home" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={isLoggedIn? <ProductDetailPage /> : <Navigate to="/login"/>} />
      </Routes>
      
    </>

  )

}

export default App
