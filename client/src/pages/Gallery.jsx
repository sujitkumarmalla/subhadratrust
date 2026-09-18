import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Images depicting children in school, rural education, and charitable work
  const images = [
    { src: '/img/poor_child_2.jpg', alt: 'Children studying in rural school', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: '/img/poor_child_4.jpg', alt: 'Smiling students in classroom', span: 'col-span-1' },
    { src: '/img/poor_child_1.jpg', alt: 'Group of children playing', span: 'col-span-1' },
    { src: '/img/science_workshop.jpg', alt: 'Young boy focusing on his notebook', span: 'col-span-1 md:col-span-2' },
    { src: '/img/child_donation.jpg', alt: 'Teacher distributing books', span: 'col-span-1' },
    { src: '/img/charity_team.jpg', alt: 'Happy students outside', span: 'col-span-1' },
    { src: '/img/poor_child_5.jpg', alt: 'Classroom learning session', span: 'col-span-1 md:col-span-3' }
  ];

  return (
    <div className="bg-smooth min-h-screen flex flex-col">
      <PageBanner 
        title="Impact Gallery"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      <section className="py-20 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-odisha-navy relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-16 after:bg-odisha-primary after:rounded-full">
              Faces of Our Future
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every picture tells a story of hope, resilience, and the transformative power of education. Explore moments captured from our schools and outreach programs.
            </p>
          </div>

          {/* Flexible Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 mb-16">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all ${img.span}`}
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-odisha-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <p className="text-white font-serif text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action for Donation */}
          <div className="bg-odisha-navy rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-odisha-secondary text-white mb-6 animate-bounce">
                <FaHeart className="text-3xl" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Help Us Create More Smiles</h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                Behind every photo is a child whose life was changed because someone like you cared. Your contribution can provide education, meals, and a brighter future for these children.
              </p>
              <Link to="/donate" className="inline-block bg-odisha-secondary hover:bg-[#008a4a] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1 text-lg">
                Donate Now
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox for Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 md:p-12 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-odisha-secondary transition-colors" onClick={() => setSelectedImage(null)}>&times;</button>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
          <p className="absolute bottom-6 left-0 right-0 text-center text-white font-serif text-xl">{selectedImage.alt}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
