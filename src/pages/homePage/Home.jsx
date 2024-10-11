
// const Home = () => {
//   return (
//     <div className="flex w-full h-screen justify-center items-center">
//       <h1 className="text-3xl text-gray-500 font-bold">WELCOME TO PAY<span className="text-teal-300 text-5xl font-bold animate-ping">N</span>VOICE</h1>
//     </div>
//   );
// };

// export default Home;




import Navbar from '../../components/Navbar.jsx';
import Hero from '../../components/Hero';
import Features from '../../components/Features.jsx';
import Testimonial from '../../components/Testimonial';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
   
  );
}

export default Home;

