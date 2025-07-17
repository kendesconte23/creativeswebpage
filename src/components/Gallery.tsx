import React, { useState } from 'react';
import { Eye, Heart, Camera } from 'lucide-react';

interface GalleryProps {
  onPhotoClick: (photo: any) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onPhotoClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'decorations', name: 'Decorations' },
    { id: 'flowers', name: 'Flowers' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'tables', name: 'Tables' },
    { id: 'ceremony', name: 'Ceremony' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Elegant White Theme',
      category: 'decorations',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pure white decorations with gold accents',
      likes: 245,
    },
    {
      id: 2,
      title: 'Rose Garden Setup',
      category: 'flowers',
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful rose arrangements',
      likes: 189,
    },
    {
      id: 3,
      title: 'Romantic Lighting',
      category: 'lighting',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Warm ambient lighting for intimate moments',
      likes: 312,
    },
    {
      id: 4,
      title: 'Rustic Table Setting',
      category: 'tables',
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Rustic elegance with natural elements',
      likes: 156,
    },
    {
      id: 5,
      title: 'Ceremony Arch',
      category: 'ceremony',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Stunning floral arch for vows',
      likes: 278,
    },
    {
      id: 6,
      title: 'Garden Party Decor',
      category: 'decorations',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Outdoor wedding decorations',
      likes: 203,
    },
    {
      id: 7,
      title: 'Bridal Bouquet',
      category: 'flowers',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Handcrafted bridal bouquet',
      likes: 167,
    },
    {
      id: 8,
      title: 'Fairy Lights',
      category: 'lighting',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Magical fairy light installations',
      likes: 234,
    },
    {
      id: 9,
      title: 'Reception Tables',
      category: 'tables',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant reception table setup',
      likes: 198,
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore our portfolio of beautiful wedding setups and decorations. 
            Each image tells a story of love, celebration, and unforgettable moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'glass text-white hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => onPhotoClick(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass-dark p-2 rounded-full">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-300" />
                    <span className="text-white/80 text-sm">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm capitalize">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="glass p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Create Your Dream Wedding?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let us help you bring your vision to life. Contact us today to discuss your wedding plans.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;