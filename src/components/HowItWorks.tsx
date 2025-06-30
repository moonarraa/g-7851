
import React, { useState } from 'react';
import { Upload, Brain, BarChart } from 'lucide-react';
import StepContent from './how-it-works/StepContent';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Steps data
  const steps = [
    {
      id: 1,
      icon: <Upload className="w-4 h-4" />,
      title: "Upload Your Survey Data",
      description: "Simply upload your survey responses in any format - CSV, Excel, or directly from popular survey platforms like SurveyMonkey, Typeform, or Google Forms.",
      highlightText: "Supports:",
      highlightDetails: "CSV files, Excel spreadsheets, and direct integrations with major survey platforms",
      gifUrl: "/lovable-uploads/50d7bc89-98fd-49a5-b67f-94230c5d3ca5.png"
    },
    {
      id: 2,
      icon: <Brain className="w-4 h-4" />,
      title: "AI Analyzes & Categorizes",
      description: "Our advanced AI processes your data, automatically categorizing responses, identifying themes, and detecting sentiment patterns across all your survey questions.",
      highlightText: "AI processes:",
      highlightDetails: "Text analysis, sentiment detection, theme identification, and statistical correlations",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Frevolutioncomedy-handshake-revolutioncomedy-icommitcombustion-kFHbqSdogIS0qtX6Pf&embed=true&screenshot=true&meta=false"
    },
    {
      id: 3,
      icon: <BarChart className="w-4 h-4" />,
      title: "Get Actionable Insights",
      description: "Receive comprehensive reports with visual charts, key findings, recommendations, and exportable summaries that drive your business decisions forward.",
      highlightText: "You get:",
      highlightDetails: "Visual dashboards, detailed reports, actionable recommendations, and exportable insights",
      gifUrl: "https://api.microlink.io?url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fchart-jtECu4TAPnhbGv2iwx&embed=true&screenshot=true&meta=false"
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-4 bg-white" id="how-it-works">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="section-tag">
            From Data to Insights
          </div>
          <h2 className="heading-lg text-convrt-dark-blue mb-4">
            How <span className="gradient-text">Survey AI</span> Works in 3 Simple Steps
          </h2>
          <p className="text-convrt-dark-blue/80 text-lg max-w-2xl mx-auto">
            Our AI-powered platform transforms your raw survey data into meaningful insights and actionable recommendations in minutes, not weeks.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[600px]">
            {/* Steps Section - Now on the left */}
            <div className="lg:w-1/3 flex flex-col gap-1 p-4 bg-gray-50">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>
            
            {/* Image Display - Now covering the entire right section */}
            <div className="lg:w-2/3 relative h-full">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    zIndex: activeStep === step.id ? 10 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src={step.gifUrl} 
                    alt={`Step ${step.id}: ${step.title}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
