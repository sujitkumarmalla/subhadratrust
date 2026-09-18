import { Link } from 'react-router-dom';

const PageBanner = ({ title, breadcrumbs, backPath, backText }) => {
  return (
    <section className="relative h-64 md:h-80 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image of Children with Blur */}
      <div className="absolute inset-0 z-0 bg-odisha-navy">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/img/poor_child_3.jpg" 
          alt="Children" 
          className="w-full h-full object-cover object-center blur-sm scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center mt-8">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 drop-shadow-lg">{title}</h1>
        
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 text-odisha-secondary text-sm font-semibold drop-shadow-md">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center space-x-2">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className={index === breadcrumbs.length - 1 ? "text-white" : ""}>{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <span className="text-white">/</span>}
              </span>
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
};

export default PageBanner;
