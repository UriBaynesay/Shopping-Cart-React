import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <header className="app-header-container">
      <h1 className="logo">VSOS</h1>
      <nav>
        <Link to={"/cart"}>
          Cart
        </Link>
      </nav>
    </header>
  )
}
