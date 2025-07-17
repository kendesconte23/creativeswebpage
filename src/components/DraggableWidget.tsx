import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface DraggableWidgetProps {
  photo: {
    id: number;
    title: string;
    category: string;
    images: string[];
    description: string;
  };
  initialPosition: { x: number; y: number };
  zIndex: number;
  onPositionChange: (position: { x: number; y: number }) => void;
  onBringToFront: () => void;
  onClick: () => void;
}

const DraggableWidget: React.FC<DraggableWidgetProps> = ({
  photo,
  initialPosition,
  zIndex,
  onPositionChange,
  onBringToFront,
  onClick,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photo.images.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [photo.images.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setHasMoved(false);
    onBringToFront();
    
    const rect = widgetRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    setHasMoved(true);
    
    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    };
    
    // Constrain to viewport
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 400;
    
    newPosition.x = Math.max(0, Math.min(maxX, newPosition.x));
    newPosition.y = Math.max(0, Math.min(maxY, newPosition.y));
    
    setPosition(newPosition);
    onPositionChange(newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % photo.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentSlide((prev) => (prev - 1 + photo.images.length) % photo.images.length);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMoved && !isDragging) {
      onClick();
    }
  };

  return (
    <div
      ref={widgetRef}
      className={`floating-widget fixed glass p-4 rounded-2xl shadow-2xl cursor-grab transition-all duration-300 hover:shadow-3xl ${
        isDragging ? 'cursor-grabbing scale-105' : ''
      }`}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        width: '300px',
        height: '400px',
      }}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      {/* Image Carousel */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
        <img
          src={photo.images[currentSlide]}
          alt={photo.title}
          className="w-full h-full object-cover transition-opacity duration-500"
          draggable={false}
        />
        
        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {photo.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
            {photo.category}
          </span>
          <Eye className="w-4 h-4 text-white/60" />
        </div>
        <h3 className="text-lg font-bold mb-2">{photo.title}</h3>
        <p className="text-sm text-white/80 line-clamp-3">{photo.description}</p>
        
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-xs text-white/60">Click to view details</p>
        </div>
      </div>
    </div>
  );
};

export default DraggableWidget;