import React from 'react'
import { useAuth } from '../../context/fake-auth-context.jsx'
import styles from './user.module.css'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className={styles.user}>
      <img
        className={styles.avatar}
        src='https://distribution.faceit-cdn.net/images/7c8701a5-fbb5-47aa-897a-1f071cd57733.jpeg'
        alt=''
      />
      <p>Welcome, {user.name}</p>
      <button className={styles.button} onClick={() => navigate('/')}>
        Logout
      </button>
    </div>
  )
}

export default User
