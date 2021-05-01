import React, { useEffect } from 'react'
import api from './services/api'
import LoginModule from './pages/login/LoginModule'

const App: React.FC = () => {
  useEffect(() => {
    api.get('/').then(response => {
      console.log(response)
    })
  }, [])

  return (
    <div className="container">
      <LoginModule />
    </div>
  )
}

export default App
