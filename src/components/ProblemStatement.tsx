
import React from 'react';
import { X, Check, FileText, BarChart, Clock, TrendingUp, Zap, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemStatement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white" id="problem">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={itemVariants} className="section-tag">
            Why Traditional Survey Tools Fall Short
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="heading-lg text-convrt-dark-blue mb-6"
          >
            Creating Surveys Shouldn't Take Days. <br />
            <span className="text-convrt-purple font-extrabold">AI Survey Creation</span> Takes Minutes.
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-convrt-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            Stop struggling with complex survey builders and manual analysis. Our AI creates engaging surveys, collects responses across multiple channels, and delivers real-time insights automatically.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Manual Survey Analysis - simplified box */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-red-50 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-[#EA384C]" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              Traditional Survey Tools
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Complex survey creation process</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Hours spent designing questions and logic flows</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Limited distribution channels</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Stuck with basic email links and embedded forms</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Manual analysis and reporting</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Wait days for insights from collected responses</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <FileText className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Complex Setup</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Clock className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Delayed Results</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <BarChart className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">Manual Work</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#EA384C]"></div>
          </motion.div>
          
          {/* AI Survey Analysis - simplified box */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-convrt-purple/10 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-convrt-purple" />
            </div>
            
            <h3 className="heading-sm text-convrt-dark-blue mb-8 flex items-center">
              Survey AI Platform
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-convrt-purple/10 text-convrt-purple rounded-full">Complete Solution</span>
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">AI-generated surveys in minutes</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Create professional surveys with smart question suggestions</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Multi-channel distribution</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Deploy via Telegram, web widgets, and custom integrations</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-convrt-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-convrt-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-convrt-dark-blue">Real-time insights and collaboration</p>
                  <p className="text-convrt-dark-blue/70 mt-1">Instant analytics with team sharing and automated reports</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-purple/5 rounded-xl p-3">
                <Brain className="w-8 h-8 text-convrt-purple mb-2" />
                <div className="text-sm text-center text-convrt-purple font-medium">AI Creation</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-purple/5 rounded-xl p-3">
                <Zap className="w-8 h-8 text-convrt-purple mb-2" />
                <div className="text-sm text-center text-convrt-purple font-medium">Real-Time</div>
              </div>
              
              <div className="aspect-square flex flex-col items-center justify-center bg-convrt-purple/5 rounded-xl p-3">
                <TrendingUp className="w-8 h-8 text-convrt-purple mb-2" />
                <div className="text-sm text-center text-convrt-purple font-medium">Auto Insights</div>
              </div>
            </div>
            
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-convrt-purple"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
