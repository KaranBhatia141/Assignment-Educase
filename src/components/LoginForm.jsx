import React from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
  return (
    <div className=" flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900">Signin to your <br /> PopX account</h2>
        <p className="text-gray-500 text-sm mb-6 mt-2" >Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>

        <form className="space-y-4">
          <div>
            <fieldset className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'>
            <legend className="block text-purple-700 text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </legend>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full "
            />
            </fieldset>
          </div>

          <div>
              <fieldset className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'>
            <legend className="block text-purple-700 text-sm font-medium mb-1" htmlFor="password">
              Password
            </legend>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full"
            />
            </fieldset>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-white font-semibold py-2 rounded-md "
            
          >
           <Link to={'/profile'}> Login</Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm