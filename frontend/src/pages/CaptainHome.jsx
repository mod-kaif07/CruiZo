import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div>CaptainHome

      <Link className="border-2 text-white rounded-4xl border-black p-2 inline-block bg-black" to="/captains/logoutCaptain">Logout</Link>
    </div>
  )
}

export default CaptainHome