import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Nav from "./Components/Navbar/Nav"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {

  return (
    <>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
      <Footer/>
    </>
  )
}

export default App
