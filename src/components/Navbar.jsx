import React from 'react'
import { Link } from 'react-router-dom'



export function Navbar() {
  return (
    <div>
      
        <div className='w-full h-16 bg-blue-900 font-bold text-white text-6xl flex justify-center items-center'>
          <Link to="/">
            <button>Debate Rule</button>
          </Link>
        </div>

      
      <div>
        <div className='w-full h-10 bg-sky-400 flex justify-center items-center gap-4 text-white font-semibold p-2'>
        <Link to="/">
          <button>Home</button>
        </Link>   

        <Link to="/Page1">
          <button>Page 1</button>
        </Link>

        <Link to="/Page2">
          <button>Page 2</button>
        </Link> 

        <Link to="/Page3">
          <button>Page 3</button>
        </Link>

        <Link to="/Page4">
          <button>Page 4</button>
        </Link>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
