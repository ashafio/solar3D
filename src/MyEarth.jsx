import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 className='text-white text-center py-4 text-3xl font-bold'>Earth</h1>

      <div className='flex justify-center'>
        <div className='w-1/2'>
          <Canvas>
            <ambientLight intensity={0.5}></ambientLight>
            <OrbitControls enableZoom={false}></OrbitControls>
            <Suspense fallback={null}>
              <Earth></Earth>
            </Suspense>
            <Environment preset='sunset'></Environment>
          </Canvas>
        </div>
        <div className='flex items-center justify-center'>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Earth</h2>
              <p>Earth is the only known planet to support life. It has a diverse range of ecosystems, including oceans, continents, and an atmosphere that sustains a variety of life forms. It's the fifth-largest planet in the solar system and the third planet from the Sun.</p>
              <div className="card-actions justify-end">
                <button className="btn" ><Link target='_blank' to='https://en.wikipedia.org/wiki/Earth'>Learn More</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
