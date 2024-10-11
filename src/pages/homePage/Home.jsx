
// const Home = () => {
//   return (
//     <div className="flex w-full h-screen justify-center items-center">
//       <h1 className="text-3xl text-gray-500 font-bold">WELCOME TO PAY<span className="text-teal-300 text-5xl font-bold animate-ping">N</span>VOICE</h1>
//     </div>
//   );
// };

// export default Home;




import Navbar from '../../components/Navbar/Navbar.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Features from '../../components/Features/Features.jsx';
import Testimonial from '../../components/Testimonial/Testimonial.jsx';
import CallToAction from '../../components/CallToAction/CallToAction.jsx';
import Footer from '../../components/Footer/Footer.jsx';

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

