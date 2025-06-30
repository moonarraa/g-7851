
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Survey AI reduced our analysis time from weeks to minutes. The insights we discovered drove a 30% improvement in customer satisfaction.",
    name: "Sarah Johnson",
    title: "Head of Customer Research at TechFlow",
    company: "TechFlow",
    logo: "techflow",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    quote: "The AI uncovered patterns in our employee feedback that we completely missed. It's like having a data scientist on demand.",
    name: "Mike Chen",
    title: "HR Director",
    company: "InnovateCorp",
    logo: "innovatecorp",
    bgColor: "bg-[#fde7dc]",
  },
  {
    id: 3,
    quote: "Survey AI's sentiment analysis helped us identify emerging trends in our market research months before our competitors.",
    name: "Emma Rodriguez",
    title: "Market Research Lead",
    company: "DataInsights",
    logo: "datainsights",
    bgColor: "bg-[#e9e9e9]",
  }
];

const stats = [
  {
    id: 1,
    value: "10,000+",
    description: "surveys analyzed",
    company: "TechFlow",
    bgColor: "bg-[#efeaf5]",
  },
  {
    id: 2,
    value: "InnovateCorp",
    description: "",
    company: "InnovateCorp",
    bgColor: "bg-white",
  },
  {
    id: 3,
    value: "DataInsights",
    description: "",
    company: "DataInsights",
    bgColor: "bg-white",
  }
];

const Testimonials = () => {
  return (
    <section className="py-8 bg-white" id="testimonials">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Trusted by research teams worldwide</h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">
          {/* Stats box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${stats[0].bgColor} p-8 flex flex-col`}>
              <div className="mt-auto">
                <div className="text-5xl font-bold mb-2">{stats[0].value}</div>
                <div className="text-gray-600">{stats[0].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-bold text-lg">
                  <span className="font-black">TF</span> TechFlow
                </div>
              </div>
            </div>
          </motion.div>

          {/* InnovateCorp box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 lg:col-span-3 rounded-xl overflow-hidden border border-gray-100"
          >
            <div className="h-full flex items-center justify-center p-6">
              <div className="font-black text-2xl">InnovateCorp</div>
            </div>
          </motion.div>

          {/* First testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 lg:col-span-6 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[0].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[0].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium">{testimonials[0].name}</div>
                <div className="text-gray-600 text-sm">{testimonials[0].title}</div>
              </div>
            </div>
          </motion.div>

          {/* Second testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 lg:col-span-6 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[1].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[1].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-bold text-lg">{testimonials[1].company}</div>
              </div>
            </div>
          </motion.div>

          {/* DataInsights box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 lg:col-span-3 rounded-xl overflow-hidden border border-gray-100"
          >
            <div className="h-full flex items-center justify-center p-6">
              <div className="font-black text-xl">
                <span className="inline-block bg-black text-white px-1 py-0.5 rounded">DI</span> DataInsights
              </div>
            </div>
          </motion.div>

          {/* Third testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-12 lg:col-span-3 rounded-xl overflow-hidden"
          >
            <div className={`h-full ${testimonials[2].bgColor} p-8 flex flex-col`}>
              <div className="text-2xl font-medium mb-8">
                "{testimonials[2].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-bold flex items-center">
                  <span className="inline-block mr-1">📊</span> {testimonials[2].company}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
