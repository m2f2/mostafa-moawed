import { Route, Routes } from "react-router-dom"
import Nav from "./Components/Navbar/Nav"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./Components/Footer/Footer"

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
