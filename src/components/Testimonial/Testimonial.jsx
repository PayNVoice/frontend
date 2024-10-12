import { Link } from "react-router-dom";

import avatarAnisha from "../../assets/images/avatar-anisha.png";
import avatarAli from "../../assets/images/avatar-ali.png";
import avatarRichard from "../../assets/images/avatar-richard.png";
import unnamed from "../../assets/images/unnamed.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Testimonial = () => {
  const testimonialArray = [
    {
      name:"Anisha Li",
      image:unnamed,
      content:"Using the platform has completely changed how we handle client payments.The escrow feature ensures that we’re always paid on time, and the automation saves us hours every month."
    },
    {
      name:"Ali Bravo",
      image:unnamed,
      content:"We’ve integrated the platform into our business,and it’s made tracking payments and milestones easier than ever.Plus, the blockchain transparency gives us peace of mind."
    },
    {
      name:"Akanimo Rex",
      image:unnamed,
      content:"As a project manager, coordinating payments across different suppliers used to be a nightmare.Now, payments are split and distributed automatically, making everything run smoother.."
    },
  ]
  return (
    <section id="testimonials">
      {/* Container to heading and testm blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          Hear from some of our users
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          {testimonialArray.map((point, index) => (
            <motion.div 
            variants={fadeIn("left", "spring", 1, 0.3)}
            initial="hidden"
            whileInView="show"
            id="services"
            className="flex  shadow-grey shadow-md flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={point.image} className="w-16 -mt-14 rounded-full" alt="" />
              <h5 className="text-lg font-bold">{point.name}</h5>
              <p className="text-sm text-darkGrayishBlue">
                {point.content}
              </p>
            </motion.div>
          ))}
              
        </div>
        {/* Button */}
        <div className="my-16">
          <Link
            to="/invoice/test"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
