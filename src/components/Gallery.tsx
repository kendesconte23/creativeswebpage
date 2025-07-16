import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/513248684_1195308455942089_4109867057533559891_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFX8wAswYWjHtbmmzjrj2jmkletH2rM2TiSV60faszZOFk3zd8QSR_Rms4Gi_FOwcmLCquGAyU1L2Nzwx2OK4JI&_nc_ohc=u6E7Q_HzUQwQ7kNvwGULTti&_nc_oc=AdnYBY9cO7KrAXSDl0kz5JWmOv02Lx1TiWkxIIL0Z0pbM1RovxNmxQj2iDLQxSQEL3uaDQ6rkhRunAxmtCKA76_8&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=tHVRqzBbJzy1mj-7UAkYqw&oh=00_AfMpgUl4alzWzIMaYEmgNb9nlkcj2fObigDS77gwULKJuA&oe=686D4967",
      alt: "Beautiful event styling by Creatives by Hazel & Ken",
      category: "Our Work"
    },
    {
      src: "https://drive.google.com/thumbnail?id=1mjtI6HDCo3BDc3QngYWhzzqUfJ4g4N5c&sz=s800",
      alt: "Beautiful table centerpiece with balloons",
      category: "Centerpieces"
    },
    {
      src: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Styled party table with decorations",
      category: "Table Setup"
    },
    {
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Colorful balloon arrangements",
      category: "Balloon Decor"
    },
    {
      src: "https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Princess themed party decoration",
      category: "Themed Parties"
    },
    {
      src: "https://images.pexels.com/photos/1729840/pexels-photo-1729840.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Elegant table and chair setup",
      category: "Table Rentals"
    },
    {
      src: "https://images.pexels.com/photos/1729854/pexels-photo-1729854.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Birthday cake table decoration",
      category: "Dessert Tables"
    },
    {
      src: "https://images.pexels.com/photos/1729879/pexels-photo-1729879.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Photo booth setup with props",
      category: "Photo Booth"
    },
    {
      src: "https://images.pexels.com/photos/1729842/pexels-photo-1729842.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Outdoor party setup",
      category: "Outdoor Events"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const categories = Array.from(new Set(images.map(img => img.category)));

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-creative-blue-800 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-creative-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-creative-blue-700 max-w-3xl mx-auto">
            Take a look at some of our recent work and get inspired for your next event
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border border-creative-blue-100"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-creative-orange-400 z-10 transition-colors duration-200"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-creative-orange-400 z-10 transition-colors duration-200"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-creative-orange-400 z-10 transition-colors duration-200"
              >
                <ChevronRight size={32} />
              </button>
              
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium">{images[selectedImage].category}</p>
                <p className="text-gray-300 text-sm">{images[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-creative-blue-700 mb-6 text-lg">
            Ready to create something beautiful for your next event?
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-creative-gradient text-white px-8 py-3 font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 rounded-lg"
          >
            Start Planning Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;