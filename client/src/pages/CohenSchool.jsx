import { FaCheckCircle, FaPalette } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const CohenSchool = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Cohen International School"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Our Wings' }, { label: 'Cohen School' }]}
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
                <FaPalette />
                <span>Nurturing Creativity</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
                Holistic Education at Cohen International School
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Cohen International School (CIS) is one of the brainchildren of SCT, which is an apt environment for holistic education. This co-educational CBSE affiliated School having LKG to Class 12 standard is one of the best schools in Bhubaneswar, Odisha which provides residential as well as day scholar educational facilities. Trust established this Centre of Excellence for teachers and students in 2020 at Jatani near IIT, Bhubaneswar. CIS aims to have a world-class training center, especially for teachers who want to work on pedagogy. Govt. of Odisha has given 10 acres of land for this center of Excellence.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                Situated in the beautiful foothills of Barunei hills, Jatani, CIS offers scenic surroundings with a vast range of flora and fauna. Its clean and green campus not only offers a peaceful atmosphere for imparting knowledge but also serves as a platform to nurture the unique talents and skills of the students, maybe in music, fine arts, literature, or sports. CIS houses a Health and Wellness center that is equipped with the necessary medical facilities to cater to the physical and emotional needs of our students. CIS believes in providing a comprehensive, inspiring environment for personalized and collaborative education through a conducive climate to boost academic excellence and creative brilliance.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                Smart education at Cohen International School is the foundation and is considered one of the basic provisions for the development of children. All efforts are made to address various challenges and to strengthen the intellectual level of the student community. In CIS students are encouraged by strong and focused visionaries, dynamic administrators, and promoters of innovative approaches. CIS offers career guidance for future researchers, scientists, engineers, doctors, artists, and more. CIS not only proffers theoretical studies, but it also focuses on practical activities, and foreign entrances and provides Artificial Intelligence (AI) & Coding courses. CIS provides a wide range of coaching programs for the national and international level entrances and is one of the best schools for preparation for IIT/JEE (Main).
              </p>
              <div>
                <a href="https://www.coheninternationalschool.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-odisha-primary hover:bg-odisha-primary-light text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-odisha-primary/30 transition-transform hover:-translate-y-1">
                  Visit School Website
                </a>
              </div>
            </div>

            {/* Image Side - Art Workshop */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative group">
                <div className="absolute inset-0 bg-odisha-navy/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                {/* Cohen International School Image */}
                <img 
                  src="/img/cohen.jpg" 
                  alt="Cohen International School Campus" 
                  className="w-full h-auto object-cover relative z-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="text-white text-xl font-serif font-bold">Cohen International School</h3>
                  <p className="text-white/80 text-sm">A Centre of Excellence at Jatani</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="italic text-gray-500 text-sm">CIS provides a clean and green campus nestled in the foothills of Barunei hills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CohenSchool;
