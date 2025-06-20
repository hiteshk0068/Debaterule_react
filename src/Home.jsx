import React from 'react'
import Blog from './components/blogs'
import Youtubecards from './components/Youtubecards'
import Debatetopics from './components/Debatetopics'







export function Home() {
  
  return (
    <div className='bg-sky-100'>



      {/* <div className='flex'>
        <div className=' w-2/5    text-black font-extrabold text-8xl text-center p-6'>WELCOME TO DEBATE HUB
        </div>

        <div className='w-3/5'>
          <img src="https://images.pexels.com/photos/4830673/pexels-photo-4830673.jpeg" alt="YES OR NO" />
        </div>
      </div> */}
      



      
      
      

      
      
      
      <div className="  min-h-screen flex items-center justify-center flex-wrap  p-6">
        <Debatetopics />
        <Youtubecards />
        <Blog />
      </div>
      

      






      

      
    
    

    </div>

  )
}

export default Home