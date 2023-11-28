
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './sharedComponents/Header/Header'

function App() {
 

  return (
    <>
    <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
