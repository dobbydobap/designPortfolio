import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import terminalFun from '../../assets/images/cards/terminalFun.png'

const LostKidSection = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const popupVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleActionClick = (card) => {
    closePopup();
    if (card.link) {
      window.open(card.link, '_blank');
    } else {
      navigate(`/${card.type}`);
    }
  };

  const handleGitHubClick = (card) => {
    closePopup();
    if (card.githubLink) {
      window.open(card.githubLink, '_blank');
    }
  };

  const sections = [
    {
      title: 'Learning Journey',
      cards: [
        { 
          title: 'My Story', 
          image: 'https://picsum.photos/300/169',
          description: 'Discover my coding journey and how I got started',
          type: 'story',
          longDescription: 'My personal journey from being a complete beginner to becoming a passionate developer.',
          details: 'Started with curiosity about how websites work, then dove deep into programming fundamentals. Every bug, every error, and every small victory shaped my learning path. This is the story of how I fell in love with coding.'
        },
        { 
          title: 'Learning Path', 
          image: 'https://picsum.photos/300/169',
          description: 'See the resources and courses that helped me grow',
          type: 'learning-path',
          longDescription: 'A curated collection of the best learning resources that accelerated my programming journey.',
          details: 'From freeCodeCamp to Udemy courses, from YouTube tutorials to documentation deep-dives. Discover the exact path I followed and the resources that made the biggest impact on my learning.'
        },
        { 
          title: 'Milestones', 
          image: 'https://picsum.photos/300/169',
          description: 'Key achievements in my learning journey',
          type: 'milestones',
          longDescription: 'Celebrating the important moments and achievements that marked my progress as a developer.',
          details: 'First "Hello World", first deployed website, first contribution to open source, and many more milestones that kept me motivated throughout my learning journey.'
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
          type: 'mini-projects',
          longDescription: 'A collection of small but meaningful projects that helped me practice and apply what I learned.',
          details: 'From simple calculators to weather apps, from todo lists to basic games. Each project taught me something new and helped build my confidence as a developer.'
        },
        { 
          title: 'Code Challenges', 
          image: 'https://picsum.photos/300/169',
          description: 'Solutions to coding challenges I solved',
          type: 'challenges',
          longDescription: 'My solutions to various coding challenges from platforms like LeetCode, HackerRank, and CodeWars.',
          details: 'Problem-solving is a crucial skill for any developer. Here you\'ll find my approach to different types of coding challenges and how I think through problems.'
        },
        { 
          title: 'Learning Resources', 
          image: 'https://picsum.photos/300/169',
          description: 'Resources that helped me learn programming',
          type: 'resources',
          longDescription: 'A comprehensive list of books, websites, courses, and tools that were invaluable in my learning journey.',
          details: 'Hand-picked resources that I found most helpful, organized by topic and difficulty level. Perfect for anyone starting their programming journey.'
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
          type: 'terminal-fun',
          longDescription: 'Interactive terminal-based games and activities that make learning programming concepts fun and engaging.',
          details: 'Experience coding concepts through play! From simple text adventures to logic puzzles, these activities help reinforce programming fundamentals in an entertaining way.',
          link: "/terminal-fun"
        },
        {
          title: "Shaurya.exe",
          description: "Chat with Shaurya's AI assistant",
          type: "ai",
          image: "https://picsum.photos/300/169",
          link: "/shaurya-exe",
          longDescription: 'An AI-powered chatbot that can help you with programming questions, debugging, and learning guidance.',
          details: 'Built with modern AI technology, this assistant can explain complex concepts, help debug code, suggest learning resources, and even have casual conversations about programming.'
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
                  onClick={() => handleCardClick(card)}
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

      {/* Netflix-style Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleOverlayClick}
          >
            <motion.div
              className="bg-[#141414] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with close button */}
              <div className="relative">
                <img 
                  src={selectedCard.image} 
                  alt={selectedCard.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">{selectedCard.title}</h2>
                <p className="text-gray-300 text-lg mb-6">{selectedCard.longDescription}</p>
                <p className="text-gray-400 mb-8">{selectedCard.details}</p>
                
                {/* Action buttons */}
                <div className="flex gap-4">
                  {selectedCard.link && (
                    <button 
                      className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
                      onClick={() => handleActionClick(selectedCard)}
                    >
                      Try It Out
                    </button>
                  )}
                  {selectedCard.githubLink && (
                    <button 
                      className="bg-gray-800 text-white px-6 py-3 rounded font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                      onClick={() => handleGitHubClick(selectedCard)}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LostKidSection; 