import React from 'react'
import { Button } from './UI/Button'
import { MailIcon } from 'lucide-react'
export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#F9FAFB] to-[#E0E7FF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
              Jobs that match you. Not just your title.
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Upload your resume and get real-time alerts for roles you're
              qualified for with explanations from Matchy AI.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-3 text-base border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:border-[#7B61FF]"
                />
              </div>
              <Button size="lg" className="py-3 px-8 text-lg">
                Get Matches
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Helping job seekers apply smarter
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#7B61FF] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#3B82F6] rounded-full opacity-20 animate-pulse delay-300"></div>
              <div className="relative bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#7B61FF] flex items-center justify-center text-white">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Resume Uploaded</h3>
                    <p className="text-sm text-gray-500">
                      resume_mr_matchy.pdf
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#F9FAFB] p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Senior Product Designer</h4>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        92% match
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Acme Inc. • Remote • $120-140k
                    </p>
                    <p className="text-xs text-gray-500">
                      Matched 18 minutes ago
                    </p>
                  </div>
                  <div className="bg-[#F9FAFB] p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">UX Researcher</h4>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        78% match
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      TechCorp • San Francisco • $110-130k
                    </p>
                    <p className="text-xs text-gray-500">
                      Matched 34 minutes ago
                    </p>
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="text-sm text-[#7B61FF] hover:underline"
                    >
                      View all 12 matches →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
