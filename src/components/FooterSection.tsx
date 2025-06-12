import React from 'react'
import { Button } from './UI/Button'
export const FooterSection = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#7B61FF] to-[#3B82F6] rounded-2xl p-8 md:p-12 mb-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to find the roles made for you?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Matchy AI shows you where you belong and how to get there.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:w-auto max-w-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white !text-[#7B61FF] hover:!bg-gray-100 w-full sm:w-auto !border-white">
              Get Started
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © 2025 Matchy AI. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[#7B61FF] text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#7B61FF] text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


