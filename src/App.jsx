import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import  './App.css'
function App() {
  return (
    <UserContextProvider>
      <div className='bg-green-600 p-4 text-3xl text-center text-white'>Context Api Practice</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
