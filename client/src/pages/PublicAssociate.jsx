import PageBanner from '../components/PageBanner';

const PublicAssociate = () => {
  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Publication Associate"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Publication Associate' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
            {/* Image Side */}
            <div className="md:w-5/12 bg-gray-100 relative min-h-[300px]">
              {/* Using a placeholder since we don't have primary.jpg locally yet */}
              <img 
                src="/img/poor_child_8.jpg" 
                alt="Publication Associate" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Text Side */}
            <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-serif text-odisha-navy mb-6 pb-4 border-b-2 border-odisha-secondary inline-block">
                Publication Associate
              </h3>
              
              <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
                <p>
                  <strong className="text-odisha-primary">Vidwan Publications</strong> was established to produce quality educational materials. It is an in-house publishing house of SCT. It aims to help students with various study materials for students those are interested beyond the regular books. It produces quality teacher's training materials or hand outs to enhance the quality of teaching.
                </p>
                <p>
                  Along with this, this helps in publishing materials on various problems and its solutions. Also, Vidwan Publication publishes Olympiad materials for higher secondary students in vernacular languages. This also publishes materials on integrated coaching, i.e., JEE, NEET and other competitive examinations.
                </p>
                <p>
                  <strong className="text-odisha-primary">Chhatra Protshyana Yojana (CPY)</strong> is a program which is part of Vidwan Publications through which 160 number of 11th and 12th standard students from SC/ST backgrounds from Mauyrbhanj district are being trained on free of cost on integrated coaching. This is being done through a MOU with the government in which the study materials provisions are made by Vidwan publications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicAssociate;
