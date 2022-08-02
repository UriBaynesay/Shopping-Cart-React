import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

export const AppHeader = () => {
  const { cart } = useSelector((storeState) => storeState.cartModule)

  return (
    <header className="app-header-container">
      <Link to="/">
        <h1 className="logo">VSOS</h1>
      </Link>

      <nav>
        <Link to={"/cart"}>Cart : {cart.length}</Link>
      </nav>
    </header>
  )
}
