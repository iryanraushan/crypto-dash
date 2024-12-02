import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import CoinPage from "./pages/CoinPage"
const App = () => {
  return (
    <div className="light:bg-white dark:bg-secondary-color">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App