import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from "./pages/Destination"
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Home from './pages/Home'
import './CSS/App.css'
import Heade from './components/Heade'
import SideNav from './components/Nav'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Heade/>
      <SideNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
