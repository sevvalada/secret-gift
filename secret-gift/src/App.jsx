import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Participants from './pages/Participants'
import Draw from './pages/Draw'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/draw" element={<Draw />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App