
import { BrowserRouter , Routes , Route } from 'react-router-dom' 
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { ClerkProvider } from '@clerk/clerk-react'
 
export function App() {
  return (
    < >
    <BrowserRouter >
    <Routes>

      <Route index element={<Auth/>} />
      <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App
