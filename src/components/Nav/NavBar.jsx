import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div id="navbar">
      <NavLink>Advice</NavLink>
      <NavLink>Trivia</NavLink>
    </div>
  )
}

export default NavBar