import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, Share2, Download } from 'lucide-react';

interface PhotoDetailProps {
  photo: {
    id: number;
    title: string;
    category: string;
    images: string[];
    description: string;
  } | null;
  onBack: () => void;
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({ photo, onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!photo) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photo.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photo.images.length) % photo.images.length);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: photo.title,
        text: photo.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = photo.images[currentSlide];
    link.download = `${photo.title}-${currentSlide + 1}.jpg`;
    link.click();
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pt-20 md:pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <button
            onClick={onBack}
            className="glass p-2 md:p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white">{photo.title}</h1>
            <p className="text-sm md:text-base text-white/80 capitalize">{photo.category}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Image Gallery */}
          <div className="glass p-4 md:p-6 rounded-2xl md:rounded-3xl">
            <div className="relative mb-4 md:mb-6">
              <img
                src={photo.images[currentSlide]}
                alt={`${photo.title} - ${currentSlide + 1}`}
                className="w-full h-64 md:h-96 object-cover rounded-xl md:rounded-2xl"
              />
              
              {/* Navigation Buttons */}
              {photo.images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 glass-dark p-2 md:p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 glass-dark p-2 md:p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </button>
                </>
              )}
              
              {/* Slide Counter */}
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 glass-dark px-2 md:px-3 py-1 rounded-full">
                <span className="text-white text-xs md:text-sm">
                  {currentSlide + 1} / {photo.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 md:grid-cols-5 gap-1 md:gap-2">
              {photo.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`aspect-square rounded-md md:rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentSlide
                      ? 'ring-2 ring-white'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4 md:space-y-8">
            <div className="glass p-4 md:p-8 rounded-2xl md:rounded-3xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Description</h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4 md:mb-6">{photo.description}</p>
              
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                    isLiked
                      ? 'bg-pink-500 text-white'
                      : 'glass-dark text-white hover:bg-white/20'
                  }`}
                >
                  <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                </button>
                
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full text-sm glass-dark text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Share</span>
                </button>
                
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-full text-sm glass-dark text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Services Info */}
            <div className="glass p-4 md:p-8 rounded-2xl md:rounded-3xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Our Services</h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Complete event setup and decoration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Professional photography and videography</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Custom floral arrangements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Event coordination and management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Equipment rental and setup</span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="glass p-4 md:p-8 rounded-2xl md:rounded-3xl text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Interested in this style?</h2>
              <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
                Contact us to discuss how we can create something similar for your special day.
              </p>
              <button className="bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;