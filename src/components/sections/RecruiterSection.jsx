import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import waves from '../../assets/images/cards/waves.png'; 
import vector from '../../assets/images/cards/vector.png';
import sst from '../../assets/images/cards/sst.png';
import resume from '../../assets/images/cards/resume.png';
import linkedin from '../../assets/images/cards/linkedin.png';
import gmail from '../../assets/images/cards/gmail.png';
import github from '../../assets/images/cards/github.png';

const RecruiterSection = () => {
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
      title: 'Top Picks for You',
      cards: [
        { 
          title: 'Project Showcase', 
          image: 'https://picsum.photos/300/169',
          description: 'Explore my latest projects and contributions',
          type: 'projects',
          longDescription: 'Discover a comprehensive collection of my most impactful projects, showcasing innovative solutions and technical expertise across various domains.',
          details: 'From full-stack web applications to mobile apps and AI-powered solutions, each project demonstrates my commitment to creating user-centric, scalable, and maintainable code.'
        },
        { 
          title: 'Professional Journey', 
          image: 'https://picsum.photos/300/169',
          description: 'Check out my professional journey',
          type: 'experience',
          longDescription: 'Follow my career progression from junior developer to senior technical roles, highlighting key milestones and achievements.',
          details: 'Experience spans across startups, enterprise companies, and freelance projects, with expertise in leading teams and delivering complex solutions.'
        },
        { 
          title: 'Get in Touch', 
          image: 'https://picsum.photos/300/169',
          description: 'Connect with me',
          type: 'contact',
          longDescription: 'Ready to collaborate? Let\'s discuss how we can work together on your next project or opportunity.',
          details: 'Available for freelance projects, full-time positions, and technical consulting. Quick response guaranteed within 24 hours.'
        },
        { 
          title: 'Skills & Expertise', 
          image: 'https://picsum.photos/300/169',
          description: 'View my technical skills and expertise',
          type: 'skills',
          longDescription: 'Comprehensive skill set covering frontend, backend, DevOps, and emerging technologies.',
          details: 'Proficient in React, Node.js, Python, AWS, Docker, and more. Continuously learning and adapting to new technologies.'
        },
        { 
          title: 'Testimonials', 
          image: 'https://picsum.photos/300/169',
          description: 'See what others say about my work',
          type: 'testimonials',
          longDescription: 'Hear from clients, colleagues, and managers about their experience working with me.',
          details: 'Consistently praised for technical expertise, communication skills, and ability to deliver projects on time and within budget.'
        },
        { 
          title: 'Achievements', 
          image: 'https://picsum.photos/300/169',
          description: 'Explore my professional achievements',
          type: 'achievements',
          longDescription: 'Recognition and accomplishments that demonstrate my commitment to excellence and innovation.',
          details: 'Awards, certifications, publications, and successful project launches that showcase my impact in the tech industry.'
        }
      ]
    },
    {
      title: 'Featured Projects',
      cards: [
        { 
          title: 'Waves', 
          image: waves,
          description: 'Chatroom without internet',
          type: 'waves',
          longDescription: 'A revolutionary web chat application that enables communication without internet connectivity for local networks.',
          details: 'Built with Socket.io and P2P technology, allowing users to create global or local networks for messaging. Features include real-time group chat functionality.',
          link: "https://waves-c53a.onrender.com/",
          githubLink: "https://github.com/wavey-waves/waves"
        },
        { 
          title: 'Vector',
          image: vector,
          description: 'NSET preparation',
          type: 'vector',
          longDescription: 'A platform that helps students prepare for NSET exams by providing resources and mock interviews.',
          details: 'Built with React, firebase, and razorpay for payment.',
          link: "https://vector-nine.vercel.app/",
          githubLink: "https://github.com/astro-dude/vector"
        }
      ]
    },
    {
      title: 'Experience',
      cards: [
        { 
          title: 'UG Senpai', 
          image: sst,
          description: 'Helping Juniors Settle In @SST',
          type: 'sst',
          longDescription: 'As a UG Senpai, I help first-year students smoothly transition into college life by mentoring them, organizing interactive sessions, and being their go-to support.',
          details: 'I conduct onboarding sessions, clear doubts, and build a friendly environment for juniors so they feel confident, connected, and at home during their first trimester.'
        },
        { 
          title: 'Co-Founder, Lead Developer', 
          image: vector,
          description: 'NSET preparation platform',
          type: 'vector',
          longDescription: 'A platform that helps students prepare for NSET exams by providing resources and mock interviews.',
          details: 'At Vector, I handle both operations and development, building the platform from scratch. I also lead mock interview sessions to help students prepare for the Scaler NSET exam. We have 100% selection till date.'
        },
      ]
    },
    {
      title: 'Take Action',
      cards: [
        { 
          title: 'Download Resume', 
          image: resume,
          description: 'Get my detailed professional profile',
          type: 'resume',
          longDescription: 'Download my comprehensive resume with detailed work experience, skills, and achievements.',
          details: 'PDF format includes complete professional history, technical skills, certifications, and contact information.',
          link: 'https://drive.google.com/file/d/12AXRfYhws0B2wWI7w4pokBwlrUl3jFgc/view'
        },
        { 
          title: 'LinkedIn Profile', 
          image: linkedin,
          description: 'Connect on LinkedIn',
          type: 'linkedin',
          longDescription: 'Connect with me on LinkedIn for professional networking and updates.',
          details: 'Regular updates on professional achievements, industry insights, and networking opportunities.',
          link: 'https://www.linkedin.com/in/astro-dude/'
        },
        { 
          title: 'Contact Me', 
          image: gmail,
          description: 'Reach out directly',
          type: 'contact',
          longDescription: 'Get in touch for collaborations, project inquiries, or general questions.',
          details: 'Quick response guaranteed.',
          link: 'mailto:sagittariusshaurya5@gmail.com'
        },
        { 
          title: 'GitHub', 
          image: github,
          description: 'Check out my code',
          type: 'github',
          longDescription: 'Explore my open-source contributions and personal projects on GitHub.',
          details: '',
          link: 'https://github.com/Astro-Dude'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white py-10">
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
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors hover:cursor-pointer"
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

export default RecruiterSection; 