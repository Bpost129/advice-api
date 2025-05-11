import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div id="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/advice'>Advice</NavLink>
      <NavLink to='/jokes'>Jokes</NavLink>
      <NavLink to='/trivia'>Trivia</NavLink>
    </div>
  )
}

export default NavBar