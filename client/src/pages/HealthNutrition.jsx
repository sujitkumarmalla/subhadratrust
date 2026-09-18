import React from 'react';
import { Link } from 'react-router-dom';
import { FaAppleAlt, FaStethoscope, FaHandsHelping, FaArrowRight } from 'react-icons/fa';

const HealthNutrition = () => {
  return (
    <div className="bg-smooth min-h-screen pt-24 pb-12">
      {/* Hero Header */}
      <section className="relative py-20 bg-odisha-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/poor_child_6.jpg" alt="Health and Nutrition" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-md">Health & Nutrition Causes</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90 drop-shadow-sm">
            Eradicating hunger and providing accessible healthcare for the poorest communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-odisha-navy mb-6">Healing and Feeding Our Communities</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Good health and proper nutrition are the bedrock of a thriving society. Sadly, many impoverished families struggle to put food on the table or access basic medical care. Our trust is actively working to bridge this gap.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              By funding medical camps, distributing essential food supplies, and providing financial aid for severe medical cases, we aim to uplift the poorest strata of society and ensure they live a healthy, dignified life.
            </p>
            <Link to="/campaigns" className="inline-flex items-center bg-odisha-secondary hover:bg-odisha-navy text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
              Explore Our Health Campaigns <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-odisha-primary rounded-3xl transform -translate-x-4 translate-y-4 opacity-30"></div>
              <img src="/img/poor_child_1.jpg" alt="Food distribution" className="relative z-10 rounded-3xl shadow-xl w-full object-cover h-[400px]" />
            </div>
          </div>
        </div>

        {/* Key Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-2xl mb-6">
              <FaAppleAlt />
            </div>
            <h3 className="text-xl font-bold text-odisha-navy mb-4">Mid-Day Meals & Rations</h3>
            <p className="text-gray-600">
              We provide free, nutritious meals to school children and distribute monthly ration kits to impoverished families and destitute elderly persons.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-6">
              <FaStethoscope />
            </div>
            <h3 className="text-xl font-bold text-odisha-navy mb-4">Free Medical Camps</h3>
            <p className="text-gray-600">
              Organizing regular health check-ups, eye camps, and supplying free medicines to remote villages where healthcare access is limited.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mb-6">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-bold text-odisha-navy mb-4">Emergency Medical Funds</h3>
            <p className="text-gray-600">
              Offering direct financial assistance for critical surgeries and treatments to those who cannot afford life-saving medical care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthNutrition;
