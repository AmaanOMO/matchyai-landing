import React from 'react'
import { CheckCircleIcon } from 'lucide-react'
import { Button } from './UI/Button'
export const ExplainerSection = () => {
  const steps = [
    {
      title: 'Upload resume',
      description:
        'Simply upload your resume and let our AI analyze your skills and experience.',
    },
    {
      title: 'Get instant job alerts',
      description:
        'Receive real-time notifications for jobs that match your profile.',
    },
    {
      title: "Learn exactly why it fits or doesn't",
      description:
        "Get detailed insights on why you're a good match or what skills you need to develop.",
    },
  ]
  return (
    <section
      id="how-it-works"
      className="py-16 px-6 bg-[#E0E7FF] bg-opacity-30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Matchy Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See it in action in 60 seconds
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircleIcon className="h-6 w-6 text-[#7B61FF]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
              <Button size="lg" className="mt-6">
                Try it Free
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-1 border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-[#7B61FF] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">Video Preview</p>
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

