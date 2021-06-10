import React, { useEffect } from 'react'
import API from './services/api'
import Routes from './services/routes'


const App: React.FC = () => {
  useEffect(() => {
    API.get('/').then(response => {
      console.log(response)
    })
  }, [])

  return <Routes />
}

export default App
