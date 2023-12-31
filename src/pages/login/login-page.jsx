import React, { useEffect, useState } from 'react'
import Navigation from '../../copmponents/navigation/navigation.jsx'
import { useAuth } from '../../context/fake-auth-context.jsx'
import { useNavigate } from 'react-router-dom'
import styles from './login-page.module.css'

const LoginPage = () => {
  const { login, isAuth } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) login(email, password)
  }

  useEffect(() => {
    if (isAuth) navigate('/app')
  }, [isAuth, navigate])

  return (
    <div className={styles.login}>
      <Navigation />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.element}>
          <label htmlFor='city'>Email address</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.element}>
          <label htmlFor='city'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
