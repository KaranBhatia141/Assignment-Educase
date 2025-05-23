import React from 'react'

function AccountSetting() {
  return (
      <div className="bg-gray-50 p-6">
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

      <div className="bg-gray rounded-lg p-4 shadow-sm flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-4 relative">
          <img
            src="https://via.placeholder.com/80" // replace with actual image URL

            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute left-[55px] top-[55px] bg-purple-600 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0020 7V5a1 1 0 00-.553-.894L15 2.276M9 10L4.447 7.724A1 1 0 014 7V5a1 1 0 01.553-.894L9 2.276M15 10v10m0 0H9m6 0a6 6 0 00-6-6H9m6 6a6 6 0 01-6-6" /> */}
            </svg>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Marry Doe</h3>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-gray-700 text-sm ">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          <hr className="w-full border-t-3 border-gray-400 border-dotted my-5" />
        </p >
      </div>
    </div>

  )
}

export default AccountSetting