import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaGraduationCap, FaHome, FaArrowRight } from 'react-icons/fa';

const HolisticCare = () => {
  return (
    <div className="bg-smooth min-h-screen pt-24 pb-12">
      {/* Hero Header */}
      <section className="relative py-20 bg-odisha-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/img/poor_child_2.jpg" alt="Holistic Care" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-md">Holistic Care for Children</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90 drop-shadow-sm">
            Providing love, shelter, and education to orphans and underprivileged children to ensure a brighter future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-odisha-navy mb-6">Nurturing Every Child's Potential</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every child deserves a safe place to call home, proper nutrition, and quality education. Subhadra Charitable Trust is committed to funding orphanages, supporting poor families, and ensuring that no child is left behind due to financial constraints.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our holistic care approach addresses the physical, emotional, and educational needs of vulnerable children across Odisha, guiding them from early childhood to independent adulthood.
            </p>
            <Link to="/donate" className="inline-flex items-center bg-odisha-primary hover:bg-odisha-navy text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
              Support a Child Today <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-odisha-secondary rounded-3xl transform translate-x-4 translate-y-4 opacity-30"></div>
              <img src="/img/child_donation.jpg" alt="Support a child" className="relative z-10 rounded-3xl shadow-xl w-full object-cover h-[400px]" />
            </div>
          </div>
        </div>

        {/* Key Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-blue-100 text-odisha-navy rounded-full flex items-center justify-center text-2xl mb-6">
              <FaHome />
            </div>
            <h3 className="text-xl font-bold text-odisha-navy mb-4">Safe Shelter & Orphanages</h3>
            <p className="text-gray-600">
              We fund and partner with local orphanages to provide a safe, loving, and hygienic environment for children without families.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-100 text-odisha-primary rounded-full flex items-center justify-center text-2xl mb-6">
              <FaGraduationCap />
            </div>
            <h3 className="text-xl font-bold text-odisha-navy mb-4">Education Funding</h3>
            <p className="text-gray-600">
              We cover tuition fees, uniforms, books, and educational materials for children from economically weaker sections.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-red-100 text-odisha-secondary rounded-full flex items-center justify-center text-2xl mb-6">
              <FaHeart />
            </div>
            <h3 className="text-xl font-bold text-odisha-navy mb-4">Emotional Support</h3>
            <p className="text-gray-600">
              Counseling and mentorship programs designed to help children overcome trauma and build strong, confident personalities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HolisticCare;
