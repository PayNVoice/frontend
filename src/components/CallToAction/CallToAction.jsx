import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id='cta' className='bg-blue-500 font-roboto '>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r to-[#568ce2] from-[#1f3a63]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of businesses already using SmartInvoice
            </p>
            <div className="mt-8">
              <button className="bg-white flex items-center justify-center m-auto text-blue-700 rounded-lg p-2  ">
                <span>Get Started Now</span>
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
