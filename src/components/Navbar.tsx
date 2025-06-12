import React from 'react'
import { Button } from './UI/Button'
export const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#7B61FF] -ml-2">
            Matchy
          </span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#features"
            className="text-gray-700 hover:text-[#7B61FF] font-medium"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-[#7B61FF] font-medium"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-[#7B61FF] font-medium"
          >
            Pricing
          </a>
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
