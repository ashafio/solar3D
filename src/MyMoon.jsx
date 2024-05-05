import { useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Moon from '../moon/Moon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-600 text-3xl font-bold'>Earth</h1>
      
      <Canvas>
        <ambientLight intensity={0.5}></ambientLight>
        <OrbitControls enableZoom={false}></OrbitControls>
        <Suspense fallback={null}>
          <Moon/>
        </Suspense>
        <Environment preset='sunset'></Environment>
      </Canvas>
      <div>
        <p>
        Moon, our precious blue oasis in the vast expanse of space, teems with life in all its diversity. From the towering mountains to the depths of the oceans, Earth is a planet of wonder and beauty. Its atmosphere blankets us, providing the air we breathe and the weather that shapes our world. It's a delicate balance, a symphony of ecosystems intertwined, sustaining life in its myriad forms. As we gaze upon its splendor, let us cherish and protect this remarkable home we call Earth, for it is the only one we have.
        </p>
      </div>
    </>
  )
}

export default App
