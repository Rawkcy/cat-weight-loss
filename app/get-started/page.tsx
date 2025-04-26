'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GetStarted() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    currentWeight: '',
    foodType: '',
    snacks: '',
    exercises: '',
    exerciseFrequency: '',
    desiredWeight: '',
    targetDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading for 1.5 seconds
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowResult(true);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-gray-900 hover:text-indigo-600">
                CatWeightLoss
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="relative pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Tell us about your cat
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Fill in the details below to get a personalized weight loss plan
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="currentWeight" className="block text-sm font-medium text-gray-700">
                  Current Weight (lbs) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="currentWeight"
                  id="currentWeight"
                  value={formData.currentWeight}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3"
                />
              </div>

              <div>
                <label htmlFor="desiredWeight" className="block text-sm font-medium text-gray-700">
                  Desired Weight (lbs) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="desiredWeight"
                  id="desiredWeight"
                  value={formData.desiredWeight}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3"
                />
              </div>

              <div>
                <label htmlFor="foodType" className="block text-sm font-medium text-gray-700">
                  Food Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="foodType"
                  id="foodType"
                  value={formData.foodType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3"
                />
              </div>

              <div>
                <label htmlFor="snacks" className="block text-sm font-medium text-gray-700">
                  Snacks (Optional)
                </label>
                <input
                  type="text"
                  name="snacks"
                  id="snacks"
                  value={formData.snacks}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3"
                />
              </div>

              <div>
                <label htmlFor="exercises" className="block text-sm font-medium text-gray-700">
                  Exercises (Optional)
                </label>
                <input
                  type="text"
                  name="exercises"
                  id="exercises"
                  value={formData.exercises}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3"
                />
              </div>

              <div>
                <label htmlFor="exerciseFrequency" className="block text-sm font-medium text-gray-700">
                  Exercise Frequency (Optional)
                </label>
                <select
                  name="exerciseFrequency"
                  id="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3"
                >
                  <option value="">Select frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div>
                <label htmlFor="targetDate" className="block text-sm font-medium text-gray-700">
                  Target Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="targetDate"
                  id="targetDate"
                  value={formData.targetDate}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Calculating...
                  </>
                ) : (
                  'Calculate Plan'
                )}
              </button>
            </div>
          </form>

          {showResult && (
            <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
              <h2 className="text-2xl font-bold text-indigo-900 text-center mb-4">
                Your Cat's Weight Loss Plan
              </h2>
              <div className="text-center text-indigo-700">
                <p className="text-lg">
                  Your cat is beautiful the way it is, don't try to change its weight!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 