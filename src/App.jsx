import { BrowserRouter,  Route,  Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Create from "./components/CreateUser"
import Read from "./components/AllUser"

function App() {
  return (
   <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/all-user' element={<Read/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
