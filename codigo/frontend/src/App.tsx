import React, { useEffect } from 'react'
import api from '@devtask/axios-config'
import LoginModal from './components/login-modal/loginModal'

// import { Container } from './styles';

const App: React.FC = () => {
  useEffect(() => {
    api.get('/').then(response => {
      console.log(response)
    })
  }, [])

  return (
    <div className="container">
      <LoginModal />
    </div>
  )
}

export default App
