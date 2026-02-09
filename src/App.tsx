import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {

  return (
    <>
        <div className='flex flex-col w-full h-full'>
        <div>
          <NavBar />
        </div>
        <div className='text-white mt-10 h-full'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
