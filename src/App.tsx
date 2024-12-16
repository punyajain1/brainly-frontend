import './App.css'
import Dasboard from './pages/pages-board'
import SDasboard from './pages/share-dboard'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return <>
  
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/:shareLink" element={<SDasboard />} />
    </Routes>
  </BrowserRouter>

  </>
}

export default App
