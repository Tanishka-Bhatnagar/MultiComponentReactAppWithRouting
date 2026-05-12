import "./Header.css"
import { Link } from "react-router-dom"

function Header({setPage}){
  return(
    <header className="header">
    <div>
      <p className="title">welcome to the page!!</p>
    </div>
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
    {/* <div>
      <nav className="navbar">
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("About")}>About</button>
        <button onClick={() => setPage("Login")}>Login</button>
      </nav>
    </div> */}
    </header>
  )
}
export default Header;