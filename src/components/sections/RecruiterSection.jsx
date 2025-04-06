import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RecruiterSection = () => {
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
    navigate(`/recruiter/${type}`);
  };

  const sections = [
    {
      title: 'Top Picks for You',
      cards: [
        { 
          title: 'Project Showcase', 
          image: 'https://picsum.photos/300/169',
          description: 'Explore my latest projects and contributions',
          type: 'projects'
        },
        { 
          title: 'Professional Journey', 
          image: 'https://picsum.photos/300/169',
          description: 'Check out my professional journey',
          type: 'experience'
        },
        { 
          title: 'Get in Touch', 
          image: 'https://picsum.photos/300/169',
          description: 'Connect with me',
          type: 'contact'
        },
        { 
          title: 'Skills & Expertise', 
          image: 'https://picsum.photos/300/169',
          description: 'View my technical skills and expertise',
          type: 'skills'
        },
        { 
          title: 'Testimonials', 
          image: 'https://picsum.photos/300/169',
          description: 'See what others say about my work',
          type: 'testimonials'
        },
        { 
          title: 'Achievements', 
          image: 'https://picsum.photos/300/169',
          description: 'Explore my professional achievements',
          type: 'achievements'
        }
      ]
    },
    {
      title: 'Featured Projects',
      cards: [
        { 
          title: 'E-commerce Platform', 
          image: 'https://picsum.photos/300/169',
          description: 'Full-stack e-commerce solution',
          type: 'project1'
        },
        { 
          title: 'Social Media App', 
          image: 'https://picsum.photos/300/169',
          description: 'Real-time social networking platform',
          type: 'project2'
        },
        { 
          title: 'AI Chatbot', 
          image: 'https://picsum.photos/300/169',
          description: 'Intelligent customer service assistant',
          type: 'project3'
        },
        { 
          title: 'Data Analytics Dashboard', 
          image: 'https://picsum.photos/300/169',
          description: 'Interactive data visualization platform',
          type: 'project4'
        },
        { 
          title: 'Mobile Banking App', 
          image: 'https://picsum.photos/300/169',
          description: 'Secure and user-friendly banking solution',
          type: 'project5'
        },
        { 
          title: 'Cloud Infrastructure', 
          image: 'https://picsum.photos/300/169',
          description: 'Scalable cloud architecture design',
          type: 'project6'
        },
        { 
          title: 'IoT Smart Home', 
          image: 'https://picsum.photos/300/169',
          description: 'Connected home automation system',
          type: 'project7'
        }
      ]
    },
    {
      title: 'Experience',
      cards: [
        { 
          title: 'Senior Developer', 
          image: 'https://picsum.photos/300/169',
          description: 'Leading development teams and projects',
          type: 'senior'
        },
        { 
          title: 'Full Stack Developer', 
          image: 'https://picsum.photos/300/169',
          description: 'Building end-to-end solutions',
          type: 'fullstack'
        },
        { 
          title: 'Tech Lead', 
          image: 'https://picsum.photos/300/169',
          description: 'Mentoring and technical leadership',
          type: 'techlead'
        },
        { 
          title: 'Software Architect', 
          image: 'https://picsum.photos/300/169',
          description: 'Designing scalable systems',
          type: 'architect'
        },
        { 
          title: 'DevOps Engineer', 
          image: 'https://picsum.photos/300/169',
          description: 'Automating deployment pipelines',
          type: 'devops'
        },
        { 
          title: 'Product Manager', 
          image: 'https://picsum.photos/300/169',
          description: 'Leading product development',
          type: 'product'
        }
      ]
    },
    {
      title: 'Take Action',
      cards: [
        { 
          title: 'Download Resume', 
          image: 'https://picsum.photos/300/169',
          description: 'Get my detailed professional profile',
          type: 'resume'
        },
        { 
          title: 'Schedule Interview', 
          image: 'https://picsum.photos/300/169',
          description: 'Let\'s discuss opportunities',
          type: 'interview'
        },
        { 
          title: 'Contact Me', 
          image: 'https://picsum.photos/300/169',
          description: 'Reach out directly',
          type: 'contact'
        },
        { 
          title: 'View Portfolio', 
          image: 'https://picsum.photos/300/169',
          description: 'Explore my complete portfolio',
          type: 'portfolio'
        },
        { 
          title: 'LinkedIn Profile', 
          image: 'https://picsum.photos/300/169',
          description: 'Connect on LinkedIn',
          type: 'linkedin'
        },
        { 
          title: 'GitHub Repos', 
          image: 'https://picsum.photos/300/169',
          description: 'Check out my code',
          type: 'github'
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

export default RecruiterSection; 