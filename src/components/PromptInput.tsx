
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Settings2, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PromptInputProps {
  onGenerateImage: (imageUrl: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ onGenerateImage }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [creativity, setCreativity] = useState([0.7]);
  const [style, setStyle] = useState('anime');
  const { toast } = useToast();

  // Fake image generation function
  const generateImage = () => {
    if (!prompt.trim()) {
      toast({
        title: 'Please enter a prompt',
        description: 'You need to describe what you want to generate',
        variant: 'destructive',
      });
      return;
    }
    
    setIsGenerating(true);
    toast({
      title: 'Generating your image',
      description: 'Please wait while we create your anime artwork',
    });
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      setIsGenerating(false);
      
      // Mock image URL - we're using a placeholder here
      const imageUrl = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7';
      onGenerateImage(imageUrl);
      
      toast({
        title: 'Image generated!',
        description: 'Your anime artwork is ready',
      });
    }, 3000);
  };

  const styleOptions = [
    { id: 'anime', name: 'Anime' },
    { id: 'manga', name: 'Manga' },
    { id: 'chibi', name: 'Chibi' },
    { id: 'pixar', name: 'Pixar' },
    { id: 'realistic', name: 'Realistic' },
  ];

  return (
    <section className="py-12 px-4" id="create">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Create Your <span className="gradient-text">Anime Masterpiece</span>
          </h2>
          
          <Card className="glass-card">
            <CardContent className="pt-6">
              <Tabs defaultValue="prompt" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="prompt">Text Prompt</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
                </TabsList>
                
                <TabsContent value="prompt" className="space-y-4">
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Describe the anime image you want to create... (e.g., 'a young wizard with blue hair casting a spell in a mystical forest')"
                      className="min-h-[120px] resize-none"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['magical girl', 'cyberpunk city', 'fantasy landscape', 'battle scene', 'cute pets'].map((tag) => (
                      <Button
                        key={tag}
                        variant="outline"
                        size="sm"
                        onClick={() => setPrompt(prompt ? `${prompt}, ${tag}` : tag)}
                        className="rounded-full"
                      >
                        + {tag}
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="advanced">
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Art Style</label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {styleOptions.map((styleOption) => (
                          <Button
                            key={styleOption.id}
                            variant={style === styleOption.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setStyle(styleOption.id)}
                            className="w-full"
                          >
                            {styleOption.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium">Creativity</label>
                        <span className="text-sm">{Math.round(creativity[0] * 100)}%</span>
                      </div>
                      <Slider
                        value={creativity}
                        min={0}
                        max={1}
                        step={0.01}
                        onValueChange={setCreativity}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Lower values create images more faithful to your prompt. Higher values allow more creativity.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 flex justify-center">
                <Button 
                  onClick={generateImage} 
                  disabled={isGenerating || !prompt.trim()} 
                  size="lg" 
                  className="w-full sm:w-auto gradient-bg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" />
                      Generate Image
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptInput;
