import "./navbar.style.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-text">AlloCity - Anywhere on Earth</h1>
      </Link>
    </div>
  )
}
