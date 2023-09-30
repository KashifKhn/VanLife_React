import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetails from './pages/Vans/VanDetails'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import './server'
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetails />} />
            
            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetail />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
