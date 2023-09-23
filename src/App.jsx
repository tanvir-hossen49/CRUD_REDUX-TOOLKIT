import { BrowserRouter,  Route,  Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Create from "./components/CreateUser"
import Read from "./components/AllUser"
import UpdateUser from "./components/UpdateUser"

function App() {
  return (
   <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Create/>}/>
        <Route exact path='/all-user' element={<Read/>}/>
        <Route exact path='/edit/:id' element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
