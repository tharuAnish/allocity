import "./App.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Country from "./pages/Country"

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Country />} />
          {/* * = path with any will redirect to root path */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
