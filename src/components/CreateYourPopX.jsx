import React from 'react'
import { Link } from 'react-router-dom';

function CreateYourPopX() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Create your <br />PopX account</h1>

        <form className="space-y-4">
         
          <div>
            <fieldset className="w-full border border-gray-300 rounded-md px-4 py-2">
            <legend className="text-sm font-medium text-purple-700 px-1">
              Full Name <span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="fullName"
              className="w-full"
              placeholder="Marry Doe"
              required
            />
            </fieldset>
          </div>

          
          <div>
            <fieldset className="w-full border border-gray-300 rounded-md px-4 py-2">
            <legend className="text-sm font-medium text-purple-700 px-1">
              Phone number <span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="phone"
              className="w-full"
              placeholder="Marry Doe"
              required
            />
            </fieldset>
          </div>

         
          <div>
            <fieldset className="w-full border border-gray-300 rounded-md px-4 py-2">
            <legend className="text-sm font-medium text-purple-700 py-1">
              Email address <span className="text-red-500">*</span>
            </legend>
            <input
              type="email"
              name="email" 
              className="w-full"
              placeholder="Marry Doe"
              required
            />
            </fieldset>
          </div>

         
          <div>
            <fieldset className="w-full border border-gray-300 rounded-md px-4 py-2">
            <legend className="text-sm font-medium text-purple-700 py-1">
              Password <span className="text-red-500">*</span>
            </legend>
            <input
              type="password"
              name="password"
              className="w-full"
              placeholder="Marry Doe"
              required
            />
            </fieldset>
          </div>

         
          <div>
            <fieldset className="w-full border border-gray-300 rounded-md px-4 py-2">
            <legend className=" text-sm font-medium text-purple-700 py-1">
              Company name
            </legend>
            <input
              type="text"
              name="company"
              className="w-full"
              placeholder="Marry Doe"
            />
            </fieldset>
          </div>

         
          <div>
            <label className="block text-sm   mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  className="text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  className="text-purple-600 ring-purple-500 h-4 w-4"
                />
                <span>No</span>
              </label>
            </div>
          </div>


          <button
            type="submit"
            className="w-full mt-6 bg-purple-700 text-white font-semibold py-2 rounded-md hover:bg-purple-700 mt-50"
          >
           <Link to={'/login'}>Create Account</Link> 
          </button>
        </form>
      </div>
    </div>
  );

}

export default CreateYourPopX