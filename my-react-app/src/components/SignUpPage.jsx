import React from 'react'

function SignUpPage() {
  return (
    <>
     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <marquee className="text-blue-500 font-bold text-xl">SIGNUP</marquee>
        <h2 className="text-2xl font-semibold">Sign Up</h2>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <button
          id="signup-button"
          className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
        >
          Sign Up
        </button>

        <div className="mt-4">Or</div>
        <button
          id="google-signup-button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
    </>
  )
}

export default SignUpPage