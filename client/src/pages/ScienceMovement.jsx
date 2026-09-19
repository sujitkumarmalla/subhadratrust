import { FaFlask, FaCheckCircle } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const ScienceMovement = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner
        title="Science Movement"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Wings' }, { label: 'Science Movement' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Text Side */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
                <FaFlask />
                <span>Promoting STEM Education</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Inspiring Young Minds Through Science
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Science Movement is essentially a non-commercial, not-for-profit initiative of Subhadra Charitable Trust to promote Science Technology Engineering Mathematics (STEM) education. In a systematic process, the most eligible students are selected to avail the opportunity of participating in a science camp for free. The Science Movement Program is designed to undertake initiatives aiming to inspire and engage children from the age group of 6-18 years who are keen on learning Science, Mathematics and Technology through observation, experimentation, inference drawing, model building, etc. It also seeks to create curiosity, excitement and a spirit of innovation & exploration among the school students, by providing them with the right kind of exposure and strong motivation to study Science and Mathematics.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                This annual initiative culminated in the event of a major Science Camp in which all the expenses of the participants are taken care of by SCT. This event is organized during the winter vacation in a pleasant and conducive environment where the participating students enjoy their learning. This program is an unique opportunity for school students to learn science through interactive sessions, demonstrations, activities, and experimentation aimed at promoting active participation of school students in basic sciences through the right kind of guidance and learning opportunities. It is a flagship program to undertake initiatives to facilitate fruitful interaction between school students and leading researchers and academicians. Besides supplementing student learning, such initiatives aim to provide a seamless setting for enthusiastic researchers as well as to contribute to grassroots learning by reaching out to students, enabling them to understand the nation's ground reality better and contributing towards the ignition of these young minds.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Along with Mr. Jyoti Ranjan Tripathy who spearheads this movement, there is a team of prominent researchers and academicians from some of the leading institutions like BARC, TIFR, IISER, NISER, IOPb, IIT, IIM, etc. who are also a part of this movement. This movement is coordinated by a Regional Coordinator with the support of a team of social and educational enthusiasts.
              </p>

              <div>
                <a href="https://sciencemovement.org" target="_blank" rel="noopener noreferrer" className="inline-block bg-odisha-primary hover:bg-odisha-primary-light text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-odisha-primary/30 transition-transform hover:-translate-y-1">
                  Visit Science Movement
                </a>
              </div>
            </div>

            {/* Image Side - Science Workshop */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                {/* Science Workshop Image */}
                <img
                  src="/img/scen.jpg"
                  alt="Science Movement Workshop"
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Science Movement Camp</h3>
                  <p className="text-white/80 text-sm">Empowering students through interactive STEM learning.</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="italic text-gray-500 text-sm">Students actively engaging in a science camp interactive session.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScienceMovement;
