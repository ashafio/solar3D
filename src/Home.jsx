import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-7xl font-bold'>Welcome to Solar3D</h1>
                    <p>Our Vision is to provide 3D experience and serving information on Astronomy.</p>
                </div>
                <div>
                    <Link to='/earth'>Earth 3D</Link>
                </div>
            </div>
        </>
    )
}

export default Home