import React, { createContext, useContext, useReducer, useState } from 'react'

const AuthContext = createContext(null)

const initialState = {
  user: null,
  isAuth: false
}

const fakeUser = {
  name: 'Bob',
  email: 'bob@bob.com',
  password: '123',
  avatar:
    'https://distribution.faceit-cdn.net/images/7c8701a5-fbb5-47aa-897a-1f071cd57733.jpeg'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuth: true
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuth: false
      }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { user, isAuth } = state

  const login = (email, password) => {
    if (email === fakeUser.email && password === fakeUser.password) {
      dispatch({ type: 'LOGIN', payload: fakeUser })
    }
  }

  const logout = () => dispatch({ type: 'LOGOUT' })

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
