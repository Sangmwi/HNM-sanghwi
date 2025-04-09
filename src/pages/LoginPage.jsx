import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (username && password) {
      setIsLoggedIn(true)
      navigate('/')
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">로그인</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input 
          type="text" 
          placeholder="아이디" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input 
          type="password" 
          placeholder="비밀번호" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button 
          type="submit"
          className="login-button"
        >
          로그인
        </button>
      </form>
    </div>
  )
}

export default LoginPage