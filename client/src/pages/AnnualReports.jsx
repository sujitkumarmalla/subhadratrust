import { FaFilePdf, FaDownload } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';

const AnnualReports = () => {
  const reports = [
    { year: '2023-2024', size: '2.4 MB' },
    { year: '2022-2023', size: '1.8 MB' },
    { year: '2021-2022', size: '2.1 MB' },
    { year: '2020-2021', size: '1.5 MB' },
  ];

  return (
    <div className="bg-smooth min-h-screen">
      <PageBanner 
        title="Annual Reports"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }, { label: 'Annual Reports' }]}
        backPath="/"
        backText="BACK TO HOME"
      />

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-odisha-secondary font-bold tracking-widest uppercase text-sm mb-4">
            <FaFilePdf />
            <span>Transparency & Accountability</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-odisha-navy mb-6 leading-tight">
            Our Annual Reports
          </h2>
          <p className="text-gray-700 mb-12 leading-relaxed text-center max-w-2xl mx-auto">
            Subhadra Charitable Trust believes in complete transparency and accountability to our stakeholders, donors, and the communities we serve. Our annual reports provide a comprehensive overview of our financial performance, impactful initiatives, and milestones achieved over the years.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-between hover:shadow-lg transition-shadow group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xl">
                    <FaFilePdf />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-odisha-navy text-lg">Annual Report {report.year}</h3>
                    <p className="text-gray-500 text-sm">PDF Document ({report.size})</p>
                  </div>
                </div>
                <button className="h-10 w-10 bg-gray-50 text-odisha-navy rounded-full flex items-center justify-center group-hover:bg-odisha-secondary group-hover:text-white transition-colors cursor-pointer" title="Download Report">
                  <FaDownload />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnualReports;
