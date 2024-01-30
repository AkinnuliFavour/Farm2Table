import { BrowserRouter, Routes, Route } from "react-router-dom"
import Onboarding from "./pages/onboarding/Onboarding"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
