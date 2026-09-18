import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const PagePlaceholder = () => {
  const location = useLocation();
  
  // Format the pathname to look like a title
  const pageTitle = location.pathname
    .split('/')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).replace(/-/g, ' '))
    .join(' - ');

  return (
    <div className="bg-smooth min-h-[60vh] flex flex-col">
      <PageBanner 
        title={pageTitle || "Page Under Construction"}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: pageTitle || 'Unknown' }]}
        backPath="/"
        backText="GO BACK HOME"
      />

      <section className="py-20 px-4 flex-grow flex items-center justify-center">
        <div className="text-center max-w-2xl bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-serif text-odisha-navy mb-4">Content Coming Soon</h2>
          <p className="text-gray-600 mb-8">This page router is working perfectly! The content for <strong>{pageTitle}</strong> will be added here soon.</p>
          <Link to="/" className="inline-flex items-center text-sm font-bold tracking-wider text-white bg-odisha-secondary hover:bg-[#008a4a] transition-colors rounded-full px-6 py-3 shadow-lg">
            <FaArrowLeft className="mr-2" /> GO BACK HOME
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PagePlaceholder;
