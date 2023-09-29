import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './server'
function App() {

  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to='/'>#VanLife</Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
