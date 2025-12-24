import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>Home
      <Link className="border-2 text-white rounded-4xl border-black p-2 inline-block bg-black" to="/user-logout">Logout</Link>
    </div>

  )
}

export default Home