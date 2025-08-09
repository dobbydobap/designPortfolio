import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import terminalFun from "../../assets/images/cards/terminalFun.png";
import waves from "../../assets/images/cards/waves.png";
import sst from "../../assets/images/cards/sst.png";
import vector from "../../assets/images/cards/vector.png";
import linkedin from "../../assets/images/cards/linkedin.png";
import gmail from "../../assets/images/cards/gmail.png";
import insta from "../../assets/images/cards/instagram.jpg";
import hangover from "../../assets/images/cards/hangover.jpeg";
import alice from "../../assets/images/cards/alice.jpg";
import moneyheist from "../../assets/images/cards/moneyheist.jpg";
import wednesday from "../../assets/images/cards/wednesday.png";
import drone from "../../assets/images/cards/drone.jpg";
import heliotropicpayload from "../../assets/images/cards/heliotropicpayload.jpeg";
import aud from "../../assets/audio/majjanilife.mp3";
import { audio } from "framer-motion/client";
import qrator from "../../assets/images/cards/qrator2.jpg";
import beats from "../../assets/images/cards/beats.jpg";
import backdrop from "../../assets/images/cards/backdrop.jpg";
import jacob from "../../assets/images/cards/jacob.jpg";


const LostKidSection = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying]);

  const cardVariants = {
    initial: { scale: 1, zIndex: 1 },
    hover: {
      scale: 1.2,
      zIndex: 10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
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
      window.open(card.link, "_blank");
    } else {
      navigate(`/${card.type}`);
    }
  };

  const handleGitHubClick = (card) => {
    closePopup();
    if (card.githubLink) {
      window.open(card.githubLink, "_blank");
    }
  };

  const sections = [
    {
      title: "Top Picks for You",
      cards: [
        {
          title: "Terminal Fun",
          image: terminalFun,
          description: "Try out some fun terminal activities and games",
          type: "terminal-fun",
          longDescription:
            "Interactive terminal-based games and activities that make learning programming concepts fun and engaging.",
          details:
            "Experience coding concepts through play! From simple text adventures to logic puzzles, these activities help reinforce programming fundamentals in an entertaining way.",
          link: "/terminal-fun",
        },
      ],
    },
    {
      title: "UI/UX Design",
      cards: [
        {
          title: "qrator",
          image: qrator,
          description: "",
          longDescription: "",
          details: "",
          link: "",
        },
        {
          title: "SST Beats",
          image: beats,
          description: "",
          longDescription: "",
          details: "",
          link: "",
        },
        {
          title: "Photobooth backdrop",
          image: backdrop,
          description: "",
          type: "",
          longDescription: "",
          details: "",
          link: "",
        },
        {
          title: "Super mentor session",
          image: jacob,
          description: "",
          type: "",
          longDescription: "",
          details: "",
          link: "",
        },
      ],
    },
    {
      title: "Fun Zone",
      cards: [
        {
          title: "Terminal Fun",
          image: terminalFun,
          description: "Try out some fun terminal activities and games",
          type: "terminal-fun",
          longDescription:
            "Interactive terminal-based games and activities that make learning programming concepts fun and engaging.",
          details:
            "Experience coding concepts through play! From simple text adventures to logic puzzles, these activities help reinforce programming fundamentals in an entertaining way.",
          link: "/terminal-fun",
        },
        // {
        //   title: "Shaurya.exe",
        //   description: "Chat with Shaurya's AI assistant",
        //   type: "ai",
        //   image: "https://picsum.photos/300/169",
        //   link: "/shaurya-exe",
        //   longDescription:
        //     "An AI-powered chatbot that can help you with programming questions, debugging, and learning guidance.",
        //   details:
        //     "Built with modern AI technology, this assistant can explain complex concepts, help debug code, suggest learning resources, and even have casual conversations about programming.",
        // },
      ],
    },
    {
      title: "Take Action",
      cards: [
        {
          title: "LinkedIn Profile",
          image: linkedin,
          description: "Connect on LinkedIn",
          type: "linkedin",
          longDescription:
            "Connect with me on LinkedIn for professional networking and updates.",
          details:
            "Regular updates on professional achievements, industry insights, and networking opportunities.",
          link: "https://www.linkedin.com/in/varshitha-kolupuri/",
        },
        {
          title: "Contact Me",
          image: gmail,
          description: "Reach out directly",
          type: "contact",
          longDescription:
            "Get in touch for collaborations, project inquiries, or general questions.",
          details: "Quick response guaranteed.",
          link: "mailto:varshitha.kolupuri@gmail.com",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-10">
      {/* <audio
        ref={audioRef}
        src={aud}
        loop
        autoPlay
        style={{ display: "none" }}
      /> */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 ${
            isPlaying ? "bg-green-600" : "bg-red-600"
          }`}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <rect
                x="6"
                y="5"
                width="4"
                height="14"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="14"
                y="5"
                width="4"
                height="14"
                rx="1"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>
      </div> */}

      <div className="max-w-[2000px] mx-auto">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 px-8 text-left">
              {section.title}
            </h2>
            <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden pb-4 pl-4 gap-3 [&::-webkit-scrollbar]:h-0.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-red-600/50 [&::-webkit-scrollbar-thumb]:hover:bg-red-600 [&::-webkit-scrollbar-thumb]:transition-colors [&::-webkit-scrollbar-thumb]:duration-300">
              {section.cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer flex-shrink-0 w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px]"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  onClick={() => handleCardClick(card)}
                  style={{ position: "relative" }}
                >
                  <div className="aspect-video rounded overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-2 sm:p-4 flex flex-col justify-end"
                      variants={contentVariants}
                      initial="initial"
                      whileHover="hover"
                      style={{ position: "absolute", zIndex: 2 }}
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4">
                        {card.description}
                      </p>
                      <button className="bg-white text-black px-3 py-2 rounded hover:bg-gray-200 transition-colors text-xs sm:text-sm">
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleOverlayClick}
          >
            <motion.div
              className="bg-[#141414] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
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
                  className="w-full h-64 object-contain bg-black rounded-t-lg"
                />
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors hover:cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">
                  {selectedCard.title}
                </h2>
                {selectedCard.date && (
                  <div className="text-gray-400 text-base mb-2">
                    {selectedCard.date}
                  </div>
                )}
                <p className="text-gray-300 text-lg mb-6">
                  {selectedCard.longDescription}
                </p>
                <p className="text-gray-400 mb-8">{selectedCard.details}</p>

                {/* Action buttons */}
                <div className="flex gap-4">
                  {selectedCard.link && (
                    <button
                      className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
                      onClick={() => handleActionClick(selectedCard)}
                    >
                      Link
                    </button>
                  )}
                  {selectedCard.githubLink && (
                    <button
                      className="bg-gray-800 text-white px-6 py-3 rounded font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                      onClick={() => handleGitHubClick(selectedCard)}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
      <div className="pb-2">
        <p className="text-center text-gray-500 text-sm mt-8">
          Made with ❤️ by Varshitha Kolupuri.
        </p>
      </div>
    </div>
  );
};

export default LostKidSection;
