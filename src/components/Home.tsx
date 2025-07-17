import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Camera, ChevronUp, ChevronDown, Eye } from 'lucide-react';

interface HomeProps {
  onPhotoClick: (photo: any) => void;
}

const Home: React.FC<HomeProps> = ({ onPhotoClick }) => {
  const [isHeroExpanded, setIsHeroExpanded] = useState(true);
  const [currentRotation, setCurrentRotation] = useState(0);

  const samplePhotos = [
    {
      id: 1,
      title: "Jose & Yanie's Wedding",
      subtitle: 'Sari-Sari Store Booth',
      category: 'Sari-Sari Store Booth',
      images: [
        'https://drive.google.com/thumbnail?id=18auikFkhG0rQzglI_HZYbktDe7w3Mff-&sz=s800',
        'https://drive.google.com/thumbnail?id=1efxotU2lkIUF56ZdjSR_PI53Ly2wWoF_&sz=s800',
        'https://drive.google.com/thumbnail?id=1Gd-8GfHnmNNfQj18Hqwv2YDHXNxIXmon&sz=s800',
        'https://drive.google.com/thumbnail?id=1ny0a2HyRM4GPZ-j-x9mtXvgTLyYNKQRJ&sz=s800',
        'https://drive.google.com/thumbnail?id=17jUhigbnQShxvrmVIhv-JIfGFCtUlBJX&sz=s800',
      ],
      description: "Celebrating the love of Yanie and Jose with a vibrant Filipino-themed wedding! Their chill vibe perfectly matched our sari-sari store booth setup, bringing a fun and nostalgic touch to their special day. Here’s to love and tradition!"
    },
    {
      id: 2,
      title: "Jessica & Louie's Wedding",
      subtitle: 'Sari-Sari Store Booth',
      category: 'Sari-Sari Store Booth',
      images: [
        'https://drive.google.com/thumbnail?id=1j88dxj-vw-YhFybUGs49-g6LgfXvLCJE&sz=s800',
        'https://drive.google.com/thumbnail?id=1ULhayeazJhgR7eU-KuPKUWI3kvwwDU8i&sz=s800',
        'https://drive.google.com/thumbnail?id=1N9pOuo4fwupLDwUEYcUx3E4QxB18y6Rs&sz=s800',
        'https://drive.google.com/thumbnail?id=1d5cmzt2dOJik6FtWUv-jxkf6dAoGceEQ&sz=s800',
        'https://drive.google.com/thumbnail?id=1SSzimKghak-PFUwqpqNdBylK5a7MHFrX&sz=s800',
      ],
      description: "Looking for a Unique Filipino Wedding Souvenir? Surprise your guests at the Wedding of Jessica & Louie with our Palengke/Gulayan Booth – a fun, fresh, and eco-friendly way to say “Thank you!” Complete with native bayong bags, fresh local produce, and charming palengke vibes."
    },
    {
      id: 3,
      title: "Gold & Jam's Wedding",
      subtitle: 'Sari-Sari Store Booth',
      category: 'Sari-Sari Store Booth',
      images: [
        'https://drive.google.com/thumbnail?id=1YiCyHJMzzLIm1GDs_N3LJtaTkUArl4Q7&sz=s800',
        'https://drive.google.com/thumbnail?id=1-DDOmFM5Bm7IAmLFrU2PEaz_cXCtVy3I&sz=s800',
        'https://drive.google.com/thumbnail?id=1JOEWnNVi-8F8dfu2wbbTX3NNoRnUAhhb&sz=s800',
        'https://drive.google.com/thumbnail?id=1kQfCF2rgjqWQ1OhsxPr_Cu2XcuOvZY8u&sz=s800',
        'https://drive.google.com/thumbnail?id=1HaE2RqslfpI4lUa4esl96rLyy94MTF5E&sz=s800',
      ],
      description: "Who’s up for a sari-sari store and salu-salo celebration? Gold and Jam definitely were! Their wedding was a joyful whirlwind of stylish outfits, vibrant vibes, and festive flair. From the heartfelt preparations to the beautiful ceremony, lively reception, and unforgettable after-parties — every moment was pure fun and magic!"
    },
    {
      id: 4,
      title: "Mike & Pawee's Wedding",
      subtitle: 'Sari-Sari Store Booth',
      category: 'Sari-Sari Store Booth',
      images: [
        'https://drive.google.com/thumbnail?id=1H50Vg_xKfQyDj6eUgSBQNqlnKWX1IVm3&sz=s800',
        'https://drive.google.com/thumbnail?id=1Q64pO6stgwHrHL2Uv-GudOQK30cn7MOr&sz=s800',
        'https://drive.google.com/thumbnail?id=1u9LpN6hh1NggDPSTEubGct9Hd89d3Uc1&sz=s800',
        'https://drive.google.com/thumbnail?id=1YfKXWYzzl7_k-n5CIgZ9l5QQ6_t0TEUr&sz=s800',
        'https://drive.google.com/thumbnail?id=19aSBqeQBFLfjj3AW64hEN1oaUAwEZHK9&sz=s800',
      ],
      description: "Take inspiration from Jam and Gold's approach, which infused their love story and cultural heritage with a touch of tradition and entertainment, making their special day truly unforgettable."
    },
    {
      id: 5,
      title: "Camille & Ryan’s Wedding",
      subtitle: 'Sari-Sari Store Booth',
      category: 'Sari-Sari Store Booth',
      images: [
        'https://drive.google.com/thumbnail?id=1M4VUfkUTgWrBnWHDd6Pti9STyoZIeEyQ&sz=s800',
        'https://drive.google.com/thumbnail?id=1halr4yPJJfun5y3-0VGoiXOFo1Xf_UrQ&sz=s800',
        'https://drive.google.com/thumbnail?id=1W45beRZCqOmksU-lpcQMv_0Cvpo2JGzF&sz=s800',
        'https://drive.google.com/thumbnail?id=1daML1oqKCPTsf2NfcbZZSPSoXcbQcloW&sz=s800',
        'https://drive.google.com/thumbnail?id=1VyzPV24tkpWr0eWvJXZDgt-rXOnLcG5Z&sz=s800',
      ],
      description: 'Ryan & Camille’s big day was a true Filipiniana Fiesta — where tradition met joy in the most beautiful way. From the elegance of barong and terno, to the rhythm of kulintang and kundiman… every detail honored our roots and radiated romance. This wasn’t just a wedding — it was a vibrant love letter to heritage, family, and forever.'
    },
  ];

  const rotateLeft = () => {
    setCurrentRotation((prev) => (prev - 1 + samplePhotos.length) % samplePhotos.length);
  };

  const rotateRight = () => {
    setCurrentRotation((prev) => (prev + 1) % samplePhotos.length);
  };

  const getWidgetPosition = (index: number) => {
    const adjustedIndex = (index - currentRotation + samplePhotos.length) % samplePhotos.length;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Widget dimensions
    const widgetWidth = 280;
    const widgetHeight = 380;
    const centerWidgetWidth = 350;
    const centerWidgetHeight = 450;
    
    // Calculate total width needed for all widgets
    const spacing = 20;
    const totalWidth = (widgetWidth * 4) + centerWidgetWidth + (spacing * 4);
    const startX = (screenWidth - totalWidth) / 2;
    const centerY = (screenHeight - centerWidgetHeight) / 2;
    
    // Position widgets in a horizontal row
    if (adjustedIndex === 0) {
      // Center widget (highlighted) - position 2 (middle)
      return {
        x: startX + (widgetWidth * 2) + (spacing * 2),
        y: centerY,
        scale: 1,
        zIndex: 10,
        isCenter: true,
        width: centerWidgetWidth,
        height: centerWidgetHeight
      };
    } else if (adjustedIndex === 1) {
      // Left of center
      return {
        x: startX + widgetWidth + spacing,
        y: centerY + 35, // Slightly lower than center
        scale: 1,
        zIndex: 5,
        isCenter: false,
        width: widgetWidth,
        height: widgetHeight
      };
    } else if (adjustedIndex === 2) {
      // Right of center
      return {
        x: startX + (widgetWidth * 2) + centerWidgetWidth + (spacing * 3),
        y: centerY + 35, // Slightly lower than center
        scale: 1,
        zIndex: 5,
        isCenter: false,
        width: widgetWidth,
        height: widgetHeight
      };
    } else if (adjustedIndex === 3) {
      // Far left
      return {
        x: startX,
        y: centerY + 70, // Even lower
        scale: 1,
        zIndex: 3,
        isCenter: false,
        width: widgetWidth,
        height: widgetHeight
      };
    } else {
      // Far right
      return {
        x: startX + (widgetWidth * 3) + centerWidgetWidth + (spacing * 4),
        y: centerY + 70, // Even lower
        scale: 1,
        zIndex: 3,
        isCenter: false,
        width: widgetWidth,
        height: widgetHeight
      };
    }
  };

  const WidgetCard = ({ photo, position, onClick }: any) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % photo.images.length);
      }, 3000);

      return () => clearInterval(slideInterval);
    }, [photo.images.length]);

    return (
      <div
        className={`fixed glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
          position.isCenter ? 'shadow-2xl ring-2 ring-white/30' : 'shadow-lg'
        }`}
        style={{
          left: position.x,
          top: position.y,
          zIndex: position.zIndex,
          width: `${position.width}px`,
          height: `${position.height}px`,
        }}
        onClick={() => onClick(photo)}
      >
        {/* Image Section */}
        <div className={`relative overflow-hidden ${position.isCenter ? 'h-64' : 'h-48'}`}>
          <img
            src={photo.images[currentSlide]}
            alt={photo.title}
            className="w-full h-full object-cover transition-opacity duration-500"
            draggable={false}
          />
          
          {/* Slide Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {photo.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="text-xs bg-black/50 text-white px-2 py-1 rounded-full backdrop-blur-sm">
              {photo.subtitle}
            </span>
          </div>

          {/* View Icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`text-white ${position.isCenter ? 'p-6' : 'p-4'}`}>
          <h3 className={`font-bold mb-2 ${position.isCenter ? 'text-xl' : 'text-lg'}`}>
            {photo.title}
          </h3>
          <p className={`text-white/80 ${position.isCenter ? 'text-sm mb-4' : 'text-xs mb-3'} line-clamp-3`}>
            {position.isCenter ? photo.description : photo.description.substring(0, 80) + '...'}
          </p>
          
          {position.isCenter && (
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium">
              Click to view details
            </button>
          )}
          
          {!position.isCenter && (
            <div className="text-xs text-white/60 mt-2">
              Click to view details
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Rotation Controls */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 z-20">
        <button
          onClick={rotateLeft}
          className="glass p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-20">
        <button
          onClick={rotateRight}
          className="glass p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Widget Cards */}
      {samplePhotos.map((photo, index) => {
        const position = getWidgetPosition(index);
        return (
          <WidgetCard
            key={photo.id}
            photo={photo}
            position={position}
            onClick={onPhotoClick}
          />
        );
      })}

      {/* Floating Elements */}
      <div className="fixed top-20 right-20 float-animation">
        <div className="glass p-4 rounded-full">
          <Heart className="w-6 h-6 text-pink-300" />
        </div>
      </div>
      
      <div className="fixed bottom-32 left-20 float-animation" style={{ animationDelay: '1s' }}>
        <div className="glass p-4 rounded-full">
          <Camera className="w-6 h-6 text-blue-300" />
        </div>
      </div>
      
      <div className="fixed top-1/2 left-10 float-animation" style={{ animationDelay: '2s' }}>
        <div className="glass p-4 rounded-full">
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>
      </div>

      {/* Hero Section - Collapsible at Bottom */}
      <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 max-w-2xl w-full px-4">
        <div className="glass rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Toggle Button */}
          <button
            onClick={() => setIsHeroExpanded(!isHeroExpanded)}
            className="w-full p-3 md:p-4 flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-colors duration-200"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold select-none">CREATIVES</span>
            {isHeroExpanded ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronUp className="w-5 h-5" />
            )}
          </button>
          
          {/* Collapsible Content */}
          <div className={`transition-all duration-300 ease-in-out ${
            isHeroExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="p-4 md:p-8 pt-0 text-center border-t border-white/10">
              <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
                <h1 className="text-2xl md:text-3xl font-bold text-white select-none">CREATIVES</h1>
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" />
              </div>
              <p className="text-base md:text-lg text-white/90 mb-3 md:mb-4 select-none">
                Your Dream Wedding Events Booth
              </p>
              <p className="text-sm text-white/80 leading-relaxed mb-4 select-none md:hidden">
                Creating unforgettable wedding experiences with premium event booth services.
              </p>
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4 md:mb-6 select-none hidden md:block">
                Welcome to CREATIVES - where every moment becomes a masterpiece! 
                We specialize in creating unforgettable wedding experiences with our 
                premium event booth services. From elegant setups to stunning photography, 
                we're here to make your special day extraordinary.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                <div className="flex items-center gap-2 text-white/80 select-none">
                  <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-300" />
                  <span className="text-xs md:text-sm">Wedding Specialists</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 select-none">
                  <Camera className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
                  <span className="text-xs md:text-sm">Professional Photography</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 select-none">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
                  <span className="text-xs md:text-sm">Custom Decorations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;