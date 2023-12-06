import React from 'react'
import { useAuth } from '../../context/fake-auth-context.jsx'
import { useNavigate } from 'react-router-dom'
import styles from './user.module.css'

const User = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={user.avatar} alt='' />
      <p>Welcome, {user.name}</p>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default User
