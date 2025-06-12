import React from 'react'
import { QuoteIcon } from 'lucide-react'
export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "I actually applied to jobs that made sense. No more wasting time on roles I'm not qualified for.",
      author: 'Jay',
      role: 'Software Developer',
    },
    {
      quote:
        "Matchy told me why I didn't get interviews. No more guessing what I was missing from my resume.",
      author: 'Sarah',
      role: 'Marketing Manager',
    },
    {
      quote:
        "Best job alert tool I've used, and I've tried them all. The AI matching is incredibly accurate.",
      author: 'Emily',
      role: 'UX Designer',
    },
  ]
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Users Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our users are already landing interviews thanks to Matchy AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F9FAFB] rounded-xl p-6 shadow-sm">
              <QuoteIcon className="h-8 w-8 text-[#7B61FF] mb-4 opacity-50" />
              <p className="text-lg mb-6 font-medium text-gray-800">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#3B82F6] flex items-center justify-center text-white font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}