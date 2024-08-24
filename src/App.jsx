import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h2>Responsive Card</h2>
      <div className='grid-container'>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
        <div className='card'>
          <h3>Lorem, ipsum.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure.</p>
        </div>
      </div>
        
    </main>
  )
}

export default App
