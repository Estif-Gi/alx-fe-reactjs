import WelcomeMessage from './components/WelcomeMessage'
import Header from './/components/Header';
import MainContent from './/components/MainContent'
import Footer from './components/Footer'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
      <Header />
      <UserProfile name="Estifanos Girma" age={24} bio="im learning frontend designing"/>
      <MainContent />
        
      <WelcomeMessage />  
      
      </div>
      <Footer />
    </>
  )
}

export default App
