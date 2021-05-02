import React, { useEffect } from 'react'
import api from './services/api'
import Routes from './services/routes'


const App: React.FC = () => {
  useEffect(() => {
    api.get('/').then(response => {
      console.log(response)
    })
  }, [])

  return <Routes />
}

export default App
