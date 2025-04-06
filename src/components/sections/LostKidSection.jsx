import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import terminalFun from '../../assets/images/cards/terminalFun.png'

const LostKidSection = () => {
  const navigate = useNavigate();

  const cardVariants = {
    initial: { scale: 1, zIndex: 1 },
    hover: { 
      scale: 1.2,
      zIndex: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  const handleCardClick = (type) => {
    navigate(`/lost-kid/${type}`);
  };

  const sections = [
    {
      title: 'Learning Journey',
      cards: [
        { 
          title: 'My Story', 
          image: 'https://picsum.photos/300/169',
          description: 'Discover my coding journey and how I got started',
          type: 'story'
        },
        { 
          title: 'Learning Path', 
          image: 'https://picsum.photos/300/169',
          description: 'See the resources and courses that helped me grow',
          type: 'learning-path'
        },
        { 
          title: 'Milestones', 
          image: 'https://picsum.photos/300/169',
          description: 'Key achievements in my learning journey',
          type: 'milestones'
        }
      ]
    },
    {
      title: 'Projects & Practice',
      cards: [
        { 
          title: 'Mini Projects', 
          image: 'https://picsum.photos/300/169',
          description: 'Small projects I built while learning',
          type: 'mini-projects'
        },
        { 
          title: 'Code Challenges', 
          image: 'https://picsum.photos/300/169',
          description: 'Solutions to coding challenges I solved',
          type: 'challenges'
        },
        { 
          title: 'Learning Resources', 
          image: 'https://picsum.photos/300/169',
          description: 'Resources that helped me learn programming',
          type: 'resources'
        }
      ]
    },
    {
      title: 'Fun Zone',
      cards: [
        { 
          title: 'Terminal Fun', 
          image: terminalFun,
          description: 'Try out some fun terminal activities and games',
          type: 'terminal-fun'
        },
        { 
          title: 'Code Playground', 
          image: 'https://picsum.photos/300/169',
          description: 'Experiment with code in a safe environment',
          type: 'playground'
        },
        { 
          title: 'Dev Memes', 
          image: 'https://picsum.photos/300/169',
          description: 'Enjoy some developer humor and memes',
          type: 'memes'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white py-20">
      <div className="max-w-[2000px] mx-auto">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 px-8 text-left">{section.title}</h2>
            <div className="flex overflow-x-auto overflow-y-hidden pb-4 pl-8 gap-4 [&::-webkit-scrollbar]:h-0.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-red-600/50 [&::-webkit-scrollbar-thumb]:hover:bg-red-600 [&::-webkit-scrollbar-thumb]:transition-colors [&::-webkit-scrollbar-thumb]:duration-300">
              {section.cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer flex-shrink-0 w-[300px]"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  onClick={() => handleCardClick(card.type)}
                  style={{ position: 'relative' }}
                >
                  <div className="aspect-video rounded overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end"
                      variants={contentVariants}
                      initial="initial"
                      whileHover="hover"
                      style={{ position: 'absolute', zIndex: 2 }}
                    >
                      <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{card.description}</p>
                      <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                        View Details
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostKidSection; 