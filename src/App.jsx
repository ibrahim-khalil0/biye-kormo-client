
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
 

  return (
    <>
    <div>
      <h1 className='bg-red-500 text-5xl'>main page</h1>
    </div>
      <Outlet></Outlet>
    </>
  )
}

export default App
