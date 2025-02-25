import WelcomeMessage from './components/WelcomeMessage'
import Header from './/components/Header';
import MainContent from './/components/MainContent'
import Footer from './components/Footer'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'
import UserContext from './UserContext.js'
import ProfilePage from './ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
       
//       <div>
//       <Header />
//       <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
//       <MainContent />
//       <WelcomeMessage />  
//       <Footer />
//       </div>
    
//     </>
//   )
// }