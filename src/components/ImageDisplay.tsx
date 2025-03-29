
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface ImageDisplayProps {
  imageUrl: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
  const [liked, setLiked] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    if (!imageUrl) return;
    
    toast({
      title: 'Download started',
      description: 'Your image is being downloaded',
    });
    
    // In a real app, we would implement actual download functionality
    // This is just a mock
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'imaginaesthetic-anime.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (!imageUrl) return;
    
    if (navigator.share) {
      navigator.share({
        title: 'My ImaginAesthetic Creation',
        text: 'Check out this anime artwork I created with ImaginAesthetic AI!',
        url: imageUrl,
      })
      .then(() => {
        toast({
          title: 'Shared successfully',
          description: 'Your image has been shared',
        });
      })
      .catch((error) => {
        toast({
          title: 'Error sharing',
          description: 'There was a problem sharing your image',
          variant: 'destructive',
        });
      });
    } else {
      navigator.clipboard.writeText(imageUrl);
      toast({
        title: 'Link copied',
        description: 'Image URL copied to clipboard',
      });
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? 'Removed from favorites' : 'Added to favorites',
      description: liked ? 'Image removed from your favorites' : 'Image saved to your favorites',
    });
  };

  if (!imageUrl) {
    return (
      <div className="py-12 px-4" id="result">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg text-muted-foreground">
              Your generated artwork will appear here. Start by entering a prompt above!
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4" id="result">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden glass-card">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={imageUrl} 
                  alt="Generated Anime Artwork" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4 bg-card/80 backdrop-blur-sm">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">Your Creation</h3>
                    <p className="text-sm text-muted-foreground">Created with ImaginAesthetic AI</p>
                  </div>
                  
                  <div className="flex space-x-2 mt-2 sm:mt-0">
                    <Button variant="outline" size="icon" onClick={handleLike}>
                      <Heart className={`h-5 w-5 ${liked ? 'fill-destructive text-destructive' : ''}`} />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleDownload}>
                      <Download className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleShare}>
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageDisplay;
