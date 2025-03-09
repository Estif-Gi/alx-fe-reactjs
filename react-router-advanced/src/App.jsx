import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import UserProfile from "./components/UserProfile"
import Profile from "./components/Profile"
import Login from "./components/Login"
import { AuthProvider } from "./components/AuthContext"

function App() {

  return (
    <Router>
      <AuthProvider>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile/*" element={<Profile/>}/>
        <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
