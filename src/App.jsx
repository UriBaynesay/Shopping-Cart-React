import { Routes, Route } from "react-router"

import "./assets/styles/main.scss"
import routes from "./routes"
import { AppHeader } from "./cmp/app-header"
import { AppFooter } from "./cmp/app-footer"

function App() {
  return (
    <div className="App ">
      <AppHeader />
      <main className="main-container">
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={true}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}

export default App
