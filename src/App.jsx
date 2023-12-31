import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetails from './pages/Vans/VanDetails'
import Login from './pages/Login'
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import Page404 from './pages/Page404'
import AuthRequired from './components/AuthRequired'
import './server'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetails />} />
            <Route path='login' element={<Login />} />

            <Route element={<AuthRequired />}>
              <Route path='host' element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='vans' element={<HostVans />} />
                <Route path='vans/:id' element={<HostVanDetail />} >
                  <Route index element={<HostVanInfo />} />
                  <Route path='pricing' element={<HostVanPricing />} />
                  <Route path='photos' element={<HostVanPhotos />} />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
