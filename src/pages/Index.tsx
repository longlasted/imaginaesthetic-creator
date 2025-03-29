
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import PromptInput from '@/components/PromptInput';
import ImageDisplay from '@/components/ImageDisplay';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerateImage = (imageUrl: string) => {
    setGeneratedImage(imageUrl);
    
    // Scroll to result section after generation
    setTimeout(() => {
      const resultSection = document.getElementById('result');
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold">
              <span className="gradient-text">ImaginAesthetic</span>
            </a>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#create" className="hover:text-primary transition-colors">Create</a>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#" className="hover:text-primary transition-colors">Examples</a>
              <a href="#" className="hover:text-primary transition-colors">Pricing</a>
            </nav>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#create" 
                className="bg-gradient-to-r from-primary via-accent to-secondary text-white px-5 py-2 rounded-full font-medium"
              >
                Start Creating
              </a>
            </motion.div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <PromptInput onGenerateImage={handleGenerateImage} />
        <ImageDisplay imageUrl={generatedImage} />
        <InfoSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
