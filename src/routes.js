import { HomePage } from "./pages/HomePage"
import { ShoppingCart } from "./pages/ShoppingCart"

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/cart",
    component: <ShoppingCart />,
  },
]

export default routes
