import "./assets/styles/main.scss"

import { Routes, Route } from "react-router"

import routes from "./routes"

function App() {
  return (
    <div className="App">
      {/* <AppHeader /> */}
      <main>
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
      {/* <AppFooter /> */}
    </div>
  )
}

export default App
