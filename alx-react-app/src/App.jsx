import WelcomeMessage from './components/WelcomeMessage'
import Header from './/components/Header';
import MainContent from './/components/MainContent'
import Footer from './components/Footer'
import { useState } from 'react'
import UserProfile from './components/UserProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
      <div>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <WelcomeMessage />  
      <Footer />
      </div>
    
    </>
  )
}

export default App
