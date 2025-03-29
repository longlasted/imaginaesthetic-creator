
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Zap, Camera, Brush, Wand2 } from 'lucide-react';
import FeatureCard from './FeatureCard';

const InfoSection: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Creation',
      description: 'Advanced machine learning algorithms trained on millions of anime artworks to deliver stunning results.',
    },
    {
      icon: Palette,
      title: 'Multiple Art Styles',
      description: 'Choose from various anime styles including traditional anime, manga, chibi, and more stylized options.',
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Generation',
      description: 'Get your anime artwork in seconds, not minutes, thanks to our optimized infrastructure.',
    },
    {
      icon: Camera,
      title: 'High-Resolution Output',
      description: 'Generate beautiful high-definition images perfect for prints, wallpapers, or social media.',
    },
    {
      icon: Brush,
      title: 'Fine-tune Your Creation',
      description: 'Adjust settings like creativity level, style intensity, and composition for perfect results.',
    },
    {
      icon: Wand2,
      title: 'Prompt Enhancement',
      description: 'Our AI understands natural language and helps improve your prompts for better results.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="features">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ImaginAesthetic leverages cutting-edge AI to transform your ideas into beautiful anime artwork with precision and creativity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              How It Works
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold gradient-text">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Describe Your Vision</h4>
                <p className="text-muted-foreground">Enter a detailed prompt describing the anime image you want to create</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold gradient-text">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">AI Processing</h4>
                <p className="text-muted-foreground">Our advanced AI analyzes your prompt and generates stunning artwork</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl font-bold gradient-text">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">Get Your Artwork</h4>
                <p className="text-muted-foreground">Download, share, and enjoy your unique AI-generated anime creation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
