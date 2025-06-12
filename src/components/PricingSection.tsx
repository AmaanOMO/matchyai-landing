import React from 'react'
import { CheckIcon } from 'lucide-react'
import { Button } from './UI/Button'
export const PricingSection = () => {
  const freePlan = {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out Matchy',
    features: [
      '5 matches per day',
      'Real-time alerts',
      'Resume parser',
      'Basic match explanation',
    ],
  }
  const proPlan = {
    name: 'Pro',
    price: '$7',
    period: 'per month',
    description: 'Unlock all Matchy features',
    features: [
      'Unlimited matches',
      'Instant priority alerts',
      'AI cover letter generator',
      'Detailed skill insights',
      'Weekly improvement reports',
      'Resume optimization tips',
    ],
    isFeatured: true,
  }
  return (
    <section id="pricing" className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Pro Features
            <span className="text-[#7B61FF] ml-2">(Free for 7 Days)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your job search needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{freePlan.name}</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{freePlan.price}</span>
                <span className="text-gray-500 ml-2">{freePlan.period}</span>
              </div>
              <p className="text-gray-600 mt-2">{freePlan.description}</p>
            </div>
            <div className="space-y-4 mb-8">
              {freePlan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#7B61FF] relative">
            <div className="absolute top-0 right-0 bg-[#7B61FF] text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
              RECOMMENDED
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{proPlan.name}</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{proPlan.price}</span>
                <span className="text-gray-500 ml-2">{proPlan.period}</span>
              </div>
              <p className="text-gray-600 mt-2">{proPlan.description}</p>
            </div>
            <div className="space-y-4 mb-8">
              {proPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button className="w-full">Start Free Trial</Button>
            <p className="text-center text-sm text-gray-500 mt-4">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
