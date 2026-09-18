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
        
        {backPath && (
          <div className="mt-8">
            <Link to={backPath} className="inline-flex items-center text-xs font-bold tracking-wider text-white hover:text-odisha-secondary transition-colors border border-white/20 hover:border-odisha-secondary rounded-full px-6 py-2 shadow-sm hover:shadow-md backdrop-blur-sm">
              <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
              {backText || "BACK"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
