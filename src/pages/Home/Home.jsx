import './Home.css';
import React from 'react'



const Home = () => {
  return (
    <div className='home'>
        <div className='hero'>
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>Welcome to the largest crypto marketplace. signup to get started </p>
        <form action="">
            <input type="text" placeholder='search crypto' />
            <button type='submit'>Search</button>
        </form>
        </div>
     
    </div>
  )
}


export default Home
