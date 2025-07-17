import React, { useState, useEffect } from 'react';
import { Camera, Heart, Sparkles, Eye, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, MessageCircle, Users, Award, ArrowDown } from 'lucide-react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentRotation, setCurrentRotation] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

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
      description: "Celebrating the love of Yanie and Jose with a vibrant Filipino-themed wedding! Their chill vibe perfectly matched our sari-sari store booth setup, bringing a fun and nostalgic touch to their special day."
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
      description: "Surprise your guests with our Palengke/Gulayan Booth – a fun, fresh, and eco-friendly way to say 'Thank you!' Complete with native bayong bags and fresh local produce."
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
      description: "A joyful whirlwind of stylish outfits, vibrant vibes, and festive flair. From heartfelt preparations to beautiful ceremony and unforgettable after-parties."
    },
  ];

  // Add two more sample photos to make 5 total
  const allSamplePhotos = [
    ...samplePhotos,
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
      description: "Take inspiration from Jam and Gold's approach, which infused their love story and cultural heritage with a touch of tradition and entertainment."
    },
    {
      id: 5,
      title: "Camille & Ryan's Wedding",
      subtitle: 'Sari-Sari Store Booth',
      category: 'Sari-Sari Store Booth',
      images: [
        'https://drive.google.com/thumbnail?id=1M4VUfkUTgWrBnWHDd6Pti9STyoZIeEyQ&sz=s800',
        'https://drive.google.com/thumbnail?id=1halr4yPJJfun5y3-0VGoiXOFo1Xf_UrQ&sz=s800',
        'https://drive.google.com/thumbnail?id=1W45beRZCqOmksU-lpcQMv_0Cvpo2JGzF&sz=s800',
        'https://drive.google.com/thumbnail?id=1daML1oqKCPTsf2NfcbZZSPSoXcbQcloW&sz=s800',
        'https://drive.google.com/thumbnail?id=1VyzPV24tkpWr0eWvJXZDgt-rXOnLcG5Z&sz=s800',
      ],
      description: 'Ryan & Camille\'s big day was a true Filipiniana Fiesta — where tradition met joy in the most beautiful way.'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allSamplePhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allSamplePhotos.length) % allSamplePhotos.length);
  };

  const rotateLeft = () => {
    setCurrentRotation((prev) => (prev - 1 + allSamplePhotos.length) % allSamplePhotos.length);
  };

  const rotateRight = () => {
    setCurrentRotation((prev) => (prev + 1) % allSamplePhotos.length);
  };

  const getWidgetPosition = (index: number) => {
    const adjustedIndex = (index - currentRotation + allSamplePhotos.length) % allSamplePhotos.length;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Widget dimensions
    const widgetWidth = 260;
    const widgetHeight = 360;
    const centerWidgetWidth = 320;
    const centerWidgetHeight = 420;
    
    // Calculate total width needed for 5 widgets
    const spacing = 15;
    const totalWidth = (widgetWidth * 4) + centerWidgetWidth + (spacing * 4);
    const startX = (screenWidth - totalWidth) / 2;
    const centerY = Math.max((screenHeight - centerWidgetHeight) / 2 + 250, 400); // Ensure minimum distance from top
    
    // Position 5 widgets in a horizontal row
    if (adjustedIndex === 0) {
      // Center widget (highlighted) - position 2 (middle)
      return {
        x: startX + (widgetWidth * 2) + (spacing * 2),
        y: centerY,
        scale: 1.1,
        zIndex: 10,
        isCenter: true,
        width: centerWidgetWidth,
        height: centerWidgetHeight
      };
    } else if (adjustedIndex === 1) {
      // Left of center
      return {
        x: startX + widgetWidth + spacing,
        y: centerY + 50,
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
        y: centerY + 50,
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
        y: centerY + 100,
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
        y: centerY + 100,
        scale: 1,
        zIndex: 3,
        isCenter: false,
        width: widgetWidth,
        height: widgetHeight
      };
    }
  };

  const handlePhotoClick = (photo: any) => {
    setSelectedPhoto(photo);
  };

  const WidgetCard = ({ photo, position, onClick }: any) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    // Check if hero section is in viewport
    useEffect(() => {
      const checkVisibility = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          const isHeroVisible = rect.bottom > 0 && rect.top < window.innerHeight;
          setIsVisible(isHeroVisible);
        }
      };

      checkVisibility();
      window.addEventListener('scroll', checkVisibility);
      return () => window.removeEventListener('scroll', checkVisibility);
    }, []);

    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % photo.images.length);
      }, 3000);

      return () => clearInterval(slideInterval);
    }, [photo.images.length]);

    if (!isVisible) return null;

    return (
      <div
        className={`fixed glass-warm rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
          position.isCenter ? 'shadow-2xl ring-2 ring-warm-dark/30' : 'shadow-lg'
        } floating-widget`}
        style={{
          left: position.x,
          top: position.y,
          zIndex: position.zIndex,
          width: `${position.width}px`,
          height: `${position.height}px`,
          position: 'absolute',
          display: isVisible ? 'block' : 'none'
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
                  index === currentSlide ? 'bg-warm-light' : 'bg-warm-light/50'
                }`}
              />
            ))}
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="text-xs bg-warm-dark/50 text-warm-light px-2 py-1 rounded-full backdrop-blur-sm">
              {photo.subtitle}
            </span>
          </div>

          {/* View Icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-warm-dark/50 p-2 rounded-full backdrop-blur-sm">
              <Eye className="w-4 h-4 text-warm-light" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`text-warm-dark ${position.isCenter ? 'p-6' : 'p-4'}`}>
          <h3 className={`font-bold mb-2 ${position.isCenter ? 'text-xl' : 'text-lg'}`}>
            {photo.title}
          </h3>
          <p className={`text-warm-dark/80 ${position.isCenter ? 'text-sm mb-4' : 'text-xs mb-3'} line-clamp-2`}>
            {position.isCenter ? photo.description.substring(0, 120) + '...' : photo.description.substring(0, 60) + '...'}
          </p>
          
          {position.isCenter && (
            <button className="w-full bg-warm-dark/20 hover:bg-warm-dark/30 text-warm-dark py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium">
              Click to view details
            </button>
          )}
          
          {!position.isCenter && (
            <div className="text-xs text-warm-dark/60 mt-2">
              Click to view details
            </div>
          )}
        </div>
      </div>
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="glass-warm p-3 rounded-full">
              <Camera className="w-8 h-8 text-warm-dark" />
            </div>
            <h1 className="text-2xl font-bold text-warm-dark">CREATIVES</h1>
          </div>

          <div className="hidden md:flex items-center gap-2 glass-warm p-2 rounded-full">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-warm-dark text-warm-light shadow-lg'
                    : 'text-warm-dark hover:bg-warm-dark/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-light via-warm-medium to-warm-dark"></div>
        
        {/* Widget Carousel Container - Constrained to Hero Section */}
        <div className="widget-carousel-container">
          {/* Rotation Controls */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20 pointer-events-auto">
            <button
              onClick={rotateLeft}
              className="glass-warm p-3 rounded-full hover:bg-warm-dark/20 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-warm-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 pointer-events-auto">
            <button
              onClick={rotateRight}
              className="glass-warm p-3 rounded-full hover:bg-warm-dark/20 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-warm-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Widget Cards */}
          {allSamplePhotos.map((photo, index) => {
            const position = getWidgetPosition(index);
            return (
              <WidgetCard
                key={photo.id}
                photo={photo}
                position={position}
                onClick={handlePhotoClick}
              />
            );
          })}
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-24 right-20 float-animation">
          <div className="glass-warm p-4 rounded-full">
            <Heart className="w-6 h-6 text-warm-dark" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-20 float-animation" style={{ animationDelay: '1s' }}>
          <div className="glass-warm p-4 rounded-full">
            <Camera className="w-6 h-6 text-warm-dark" />
          </div>
        </div>
        
        <div className="absolute top-1/2 left-16 float-animation" style={{ animationDelay: '2s' }}>
          <div className="glass-warm p-4 rounded-full">
            <Sparkles className="w-6 h-6 text-warm-dark" />
          </div>
        </div>

        {/* CREATIVES Branding - Positioned at top to avoid widget overlap */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-5 text-center pointer-events-none">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Sparkles className="w-8 h-8 text-warm-dark" />
            <h1 className="text-4xl md:text-6xl font-bold text-warm-dark">CREATIVES</h1>
            <Sparkles className="w-8 h-8 text-warm-dark" />
          </div>
          
          <p className="text-2xl md:text-3xl text-warm-dark/80 mb-6 font-light">
            Your Dream Wedding Events Booth
          </p>
          
          <p className="text-base md:text-lg text-warm-dark/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Creating unforgettable wedding experiences with premium event booth services. 
            From elegant setups to stunning photography, we make your special day extraordinary.
          </p>
        </div>

        {/* Call to Action Button - Positioned at bottom */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto">
          <button
            onClick={() => scrollToSection('gallery')}
            className="bg-warm-dark text-warm-light px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Work
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass-warm p-3 rounded-full animate-bounce pointer-events-auto"
        >
          <ArrowDown className="w-6 h-6 text-warm-dark" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 bg-warm-light">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-warm-dark mb-6">About CREATIVES</h2>
            <p className="text-xl text-warm-dark/80 max-w-3xl mx-auto">
              We are passionate about creating unforgettable wedding experiences. 
              Our Sari-Sari store approach means we offer everything you need for your special day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="glass-warm p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-warm-dark mb-6">Our Story</h3>
              <div className="space-y-4 text-warm-dark/80">
                <p>
                  Founded with a vision to make dream weddings accessible to everyone, 
                  CREATIVES started as a small family business with big dreams. 
                  Just like a traditional Sari-Sari store that provides everything 
                  the community needs, we offer comprehensive wedding services under one roof.
                </p>
                <p>
                  Today, we're proud to have helped hundreds of couples create their 
                  perfect wedding day, each one unique and filled with love, laughter, 
                  and unforgettable memories.
                </p>
              </div>
            </div>

            <div className="glass-warm p-8 rounded-3xl">
              <img
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding setup"
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <h4 className="text-2xl font-bold text-warm-dark mb-4">Why Choose Us?</h4>
              <ul className="space-y-2 text-warm-dark/80">
                <li>• Complete wedding packages</li>
                <li>• Affordable pricing options</li>
                <li>• Personalized service</li>
                <li>• Local expertise</li>
                <li>• Stress-free planning</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passionate Service',
                description: 'We pour our heart into every event, ensuring your special day is perfect in every detail.',
              },
              {
                icon: Users,
                title: 'Experienced Team',
                description: 'Our skilled professionals bring years of experience in wedding planning and event coordination.',
              },
              {
                icon: Award,
                title: 'Quality Guaranteed',
                description: 'We maintain the highest standards in all our services, from setup to execution.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="glass-warm p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 flex justify-center">
                    <div className="glass-dark p-4 rounded-full group-hover:bg-warm-dark/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-warm-dark" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-warm-dark mb-3">{feature.title}</h4>
                  <p className="text-warm-dark/80 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen py-20 bg-warm-medium">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-warm-dark mb-6">Our Gallery</h2>
            <p className="text-xl text-warm-dark/80 max-w-3xl mx-auto">
              Explore our portfolio of beautiful wedding setups and decorations. 
              Each image tells a story of love, celebration, and unforgettable moments.
            </p>
          </div>

          {/* Featured Carousel */}
          <div className="glass-warm p-8 rounded-3xl mb-12">
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-6">
                <img
                  src={allSamplePhotos[currentSlide].images[0]}
                  alt={allSamplePhotos[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 glass-dark p-3 rounded-full hover:bg-warm-dark/20 transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-warm-light" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 glass-dark p-3 rounded-full hover:bg-warm-dark/20 transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-warm-light" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allSamplePhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-warm-light' : 'bg-warm-light/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-warm-dark mb-2">
                  {allSamplePhotos[currentSlide].title}
                </h3>
                <p className="text-warm-dark/80 mb-4">
                  {allSamplePhotos[currentSlide].description}
                </p>
                <span className="inline-block bg-warm-dark/10 text-warm-dark px-4 py-2 rounded-full text-sm">
                  {allSamplePhotos[currentSlide].category}
                </span>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allSamplePhotos.slice(0, 6).map((photo) => (
              <div key={photo.id} className="glass-warm rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={photo.images[0]}
                    alt={photo.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/20 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="glass-dark p-2 rounded-full">
                      <Eye className="w-5 h-5 text-warm-light" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-warm-dark mb-2">{photo.title}</h4>
                  <p className="text-warm-dark/80 mb-4 text-sm">{photo.description.substring(0, 100)}...</p>
                  <span className="text-warm-dark/60 text-sm capitalize">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 bg-warm-dark">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-warm-light mb-6">Contact Us</h2>
            <p className="text-xl text-warm-light/80 max-w-3xl mx-auto">
              Ready to start planning your dream wedding? Get in touch with us today! 
              We're here to answer all your questions and help you create the perfect celebration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Viber Contact */}
            <div className="glass-dark p-8 rounded-3xl">
              <div className="text-center mb-8">
                <MessageCircle className="w-16 h-16 text-warm-light mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-warm-light mb-4">Contact via Viber</h3>
                <p className="text-warm-light/80">
                  Click on the QR codes below or tap the contact buttons to chat with us directly on Viber
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Hazel Contact */}
                <div className="glass-warm p-6 rounded-2xl text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-warm-light p-2 rounded-xl">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=viber://chat?number=%2B639498038875"
                      alt="Hazel Viber QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-warm-dark mb-2">Hazel Desconte</h4>
                  <p className="text-warm-dark/80 mb-3">Creative Director</p>
                  <p className="text-warm-dark/60 text-sm mb-4">+639498038875</p>
                  <button
                    onClick={() => window.open('viber://chat?number=%2B639498038875', '_blank')}
                    className="w-full bg-warm-dark hover:bg-warm-dark/80 text-warm-light py-3 px-4 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat with Hazel
                  </button>
                </div>

                {/* Ken Contact */}
                <div className="glass-warm p-6 rounded-2xl text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-warm-light p-2 rounded-xl">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=viber://chat?number=%2B639604716706"
                      alt="Ken Viber QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-warm-dark mb-2">Ken Desconte</h4>
                  <p className="text-warm-dark/80 mb-3">Event Styling Specialist</p>
                  <p className="text-warm-dark/60 text-sm mb-4">+639604716706</p>
                  <button
                    onClick={() => window.open('viber://chat?number=%2B639604716706', '_blank')}
                    className="w-full bg-warm-dark hover:bg-warm-dark/80 text-warm-light py-3 px-4 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat with Ken
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-dark p-8 rounded-3xl">
                <h3 className="text-3xl font-bold text-warm-light mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {[
                    { icon: Phone, title: 'Phone', details: '+63 912 345 6789' },
                    { icon: Mail, title: 'Email', details: 'hello@creatives.wedding' },
                    { icon: MapPin, title: 'Location', details: 'Manila, Philippines' },
                    { icon: Clock, title: 'Hours', details: 'Mon-Sat: 9AM-6PM' },
                  ].map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="glass-warm p-3 rounded-full">
                          <Icon className="w-6 h-6 text-warm-dark" />
                        </div>
                        <div>
                          <h4 className="text-warm-light font-semibold">{info.title}</h4>
                          <p className="text-warm-light/80">{info.details}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="glass-dark p-8 rounded-3xl text-center">
                <h3 className="text-2xl font-bold text-warm-light mb-4">Ready to Create Your Dream Wedding?</h3>
                <p className="text-warm-light/80 mb-6">
                  Let us help you bring your vision to life. Contact us today to discuss your wedding plans.
                </p>
                <button
                  onClick={() => window.open('viber://chat?number=%2B639604716706', '_blank')}
                  className="bg-warm-light text-warm-dark px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Start Planning Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;