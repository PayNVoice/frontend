import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion";

const Features = () => {
  const featuresArray = [
    {
      number: "01",
      header: "Automated Smart Contract Invoicing",
      body: "Generate invoices with predefined conditions like due dates, delivery terms, and automatic payment triggers.Payments are secured through smart contracts, ensuring timely and secure transactions.",
    },
    {
      number: "02",
      header: "Escrow and Payment Automation",
      body: "Ensure funds are safely held in escrow and only released when predefined conditions are met,removing the risks of delayed payments or unmet contract terms.",
    },
    {
      number: "03",
      header: "Multi-Party Contract Support",
      body: "Create agreements involving multiple stakeholders. Payments can be distributed automatically based on agreed percentages or fixed amounts, ensuring transparent collaboration between all parties.",
    },
  ];

  return (
    <motion.section id="features" variants={staggerContainer(0.5, 0.3)}>
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* What's Different */}
        <motion.div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What do we do?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            From escrow services to milestone-based payments, our platform is
            built for businesses ready to adopt the future of secure, digital
            transactions.
          </p>
        </motion.div>

        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          {featuresArray.map((point, index) => (
            <motion.div
              key={point.body}
              variants={slideIn("down", "spring", 1, index * 0.3)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
            >
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-500">
                    {point.number}
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {point.header}
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {point.header}
                </h3>
                <p className="text-darkGrayishBlue">{point.body}</p>
              </div>
            </motion.div>
          ))}

          {/* List Item 2 */}

          {/* List Item 3 */}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
