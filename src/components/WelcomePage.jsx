import React from 'react'
import {Link} from 'react-router-dom'




function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-end bg-gray-50 px-4 pb-10">
      <div className="w-full max-w-md ">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>

        <div className="space-y-4">
          <button className="w-full bg-purple-700 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg">
            <Link to={'/register'}>Create Account</Link>
          </button>
          <button className="w-full bg-purple-300 font-semibold py-2 rounded-lg">
           <Link to={'/login'}> Already Registered? Login</Link>
          </button>
        </div>
      </div>
    </div>

  )
}

export default WelcomePage