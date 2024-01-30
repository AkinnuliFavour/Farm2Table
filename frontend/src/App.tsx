import { BrowserRouter, Routes, Route } from "react-router-dom"
import Onboarding from "./pages/onboarding/Onboarding"
import Home from "./pages/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
