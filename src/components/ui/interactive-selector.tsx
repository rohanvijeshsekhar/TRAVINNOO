import React, { useState, useEffect } from 'react';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const options = [
    {
      title: "Dubai",
      description: "Modern skylines & desert safaris",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Kenya",
      description: "Untamed wildlife & savannah reserves",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Thailand",
      description: "Golden temples & tropical islands",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Malaysia",
      description: "Vibrant cultures & rainforest escapes",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Singapore",
      description: "Futuristic gardens & cosmopolitan charm",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Vietnam",
      description: "Historic cities & dramatic karst bays",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Bali",
      description: "Sacred temples & pristine beaches",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-transparent font-sans text-white py-12">
      {/* Options Container */}
      <div className="options flex w-full max-w-[1100px] min-w-[320px] h-[450px] mx-auto items-stretch overflow-hidden relative rounded-2xl border border-white/10 bg-[#0c0c0c] shadow-2xl">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '40px',
              minHeight: '100px',
              margin: 0,
              borderRight: index < options.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect overlay */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-in-out bg-gradient-to-t from-black/90 via-black/40 to-transparent"
              style={{
                opacity: activeIndex === index ? 0.95 : 0.4
              }}
            ></div>
            
            {/* Label with info (Only visible for active) */}
            <div className="absolute left-6 bottom-6 z-10 pointer-events-none max-w-[90%]">
              <div 
                className="info text-white relative transition-all duration-700 ease-in-out"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: activeIndex === index ? 'translateY(0)' : 'translateY(15px)'
                }}
              >
                <div className="main font-bold text-xl tracking-wide uppercase text-[#F5F2EC] drop-shadow-md">
                  {option.title}
                </div>
                <div className="sub text-xs text-white/80 font-medium whitespace-nowrap mt-1 drop-shadow-sm">
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
