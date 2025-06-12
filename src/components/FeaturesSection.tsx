import React from 'react'
import { BarChartIcon, BellIcon, PuzzleIcon, LineChartIcon } from 'lucide-react'
export const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChartIcon className="h-8 w-8 text-[#7B61FF]" />,
      title: 'Matchy AI ranks jobs based on your resume',
      description:
        'Our AI analyzes your resume and compares it against job requirements to find your best matches.',
    },
    {
      icon: <BellIcon className="h-8 w-8 text-[#7B61FF]" />,
      title: 'Real-time alerts for all jobs',
      description:
        'Get notified instantly when new jobs matching your skills are posted, not just the top picks.',
    },
    {
      icon: <PuzzleIcon className="h-8 w-8 text-[#7B61FF]" />,
      title: "Breakdown of what fits and what you're missing",
      description:
        "Understand exactly why you match or don't match each role with detailed skill analysis.",
    },
    {
      icon: <LineChartIcon className="h-8 w-8 text-[#7B61FF]" />,
      title: 'Weekly recaps and resume feedback',
      description:
        'Receive personalized insights on how to improve your resume for better job matches.',
    },
  ]
  return (
    <section id="features" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart. Fast. Transparent.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform goes beyond traditional job matching to help
            you find roles you're truly qualified for.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
