import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Moon from '../public/Moon'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 className='text-white text-center py-4 text-3xl font-bold'>Moon</h1>

      <div className='sm:grid grid-cols-1 lg:flex justify-center'>
        <div className='w-1/2'>
          <Canvas>
            <ambientLight intensity={0.5}></ambientLight>
            <OrbitControls enableZoom={false}></OrbitControls>
            <Suspense fallback={null}>
              <Moon></Moon>
            </Suspense>
            <Environment preset='sunset'></Environment>
          </Canvas>
        </div>
        <div className='flex items-center justify-center'>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Moon</h2>
              <p>Earth's moon is the fifth-largest moon in the solar system and the only natural satellite of Earth. It has a heavily cratered surface and no atmosphere. The Moon's gravitational pull influences Earth's tides and has been the target of both human and robotic exploration.</p>
              <div className="card-actions justify-end">
                <button className="btn" ><Link target='_blank' to='https://en.wikipedia.org/wiki/Moon'>Learn More</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
