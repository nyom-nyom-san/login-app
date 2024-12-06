import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { AuthContext } from './pages/AuthContext'
import { useState } from 'react'
import RequireAuth from './components/RequireAuth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  const [token, setToken] = useState(null)

  return (
    <AuthContext.Provider value={{ token, setToken }}>

      <BrowserRouter>
        <Routes>
          <Route element={<RequireAuth><Dashboard /></RequireAuth>} path='/dashboard' />
          <Route element={<Login />} path='/login' />
          <Route element={<Home />} path='/home' />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
