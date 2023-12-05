import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('')
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
