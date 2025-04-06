import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHome, FaTerminal, FaArrowLeft } from 'react-icons/fa';
import macbook from '../../assets/images/macbook.png'

const TerminalFun = () => {
  const navigate = useNavigate();
  const [terminalOutput, setTerminalOutput] = useState([
    "Welcome to the Interactive Terminal!",
    'Type "help" to see available commands.\n',
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [gameState, setGameState] = useState(null);
  const terminalRef = useRef(null);

  // Snake game state
  const [snake, setSnake] = useState([]);
  const [food, setFood] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('right');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameLoopRef = useRef(null);

  const GRID_SIZE = 15;
  const CELL_SIZE = 1;
  const GAME_SPEED = 150; // milliseconds

  const initializeSnake = () => {
    return [
      { x: 5, y: 7 },
      { x: 4, y: 7 },
      { x: 3, y: 7 }
    ];
  };

  const generateFood = () => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
        y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  };

  const startSnakeGame = () => {
    const initialSnake = initializeSnake();
    setSnake(initialSnake);
    setFood(generateFood());
    setDirection('right');
    setScore(0);
    setGameOver(false);
    setGameState('snake');
    setTerminalOutput(['Snake Game Started!', 'Use arrow keys to move. Press Q to quit.']);
  };

  const endSnakeGame = () => {
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }
    setGameState(null);
    setTerminalOutput(prev => [...prev, `Game Over! Final Score: ${score}`]);
  };

  const moveSnake = () => {
    if (gameOver) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'up': head.y -= 1; break;
        case 'down': head.y += 1; break;
        case 'left': head.x -= 1; break;
        case 'right': head.x += 1; break;
      }

      // Check for collisions with walls
      if (
        head.x <= 0 || head.x >= GRID_SIZE - 1 ||
        head.y <= 0 || head.y >= GRID_SIZE - 1
      ) {
        setGameOver(true);
        endSnakeGame();
        return prevSnake;
      }

      // Check for collisions with self
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        endSnakeGame();
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check for food
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  };

  const renderGame = () => {
    const grid = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(' '));
    
    // Draw borders
    for (let i = 0; i < GRID_SIZE; i++) {
      grid[0][i] = '─';
      grid[GRID_SIZE - 1][i] = '─';
      grid[i][0] = '│';
      grid[i][GRID_SIZE - 1] = '│';
    }
    grid[0][0] = '┌';
    grid[0][GRID_SIZE - 1] = '┐';
    grid[GRID_SIZE - 1][0] = '└';
    grid[GRID_SIZE - 1][GRID_SIZE - 1] = '┘';
    
    // Place snake
    snake.forEach((segment, index) => {
      grid[segment.y][segment.x] = index === 0 ? 'O' : 'o';
    });
    
    // Place food
    grid[food.y][food.x] = '*';

    return grid.map((row, y) => 
      row.map((cell, x) => cell).join('')
    ).join('\n');
  };

  useEffect(() => {
    if (gameState === 'snake' && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
      return () => clearInterval(gameLoopRef.current);
    }
  }, [gameState, gameOver, direction]);

  const handleKeyDown = (e) => {
    if (gameState === 'snake') {
      switch (e.key) {
        case 'ArrowUp': 
          if (direction !== 'down') {
            e.preventDefault();
            setDirection('up');
          }
          break;
        case 'ArrowDown': 
          if (direction !== 'up') {
            e.preventDefault();
            setDirection('down');
          }
          break;
        case 'ArrowLeft': 
          if (direction !== 'right') {
            e.preventDefault();
            setDirection('left');
          }
          break;
        case 'ArrowRight': 
          if (direction !== 'left') {
            e.preventDefault();
            setDirection('right');
          }
          break;
        case 'q': 
          e.preventDefault();
          endSnakeGame(); 
          break;
      }
    } else {
      if (e.key === 'Enter') {
        if (input.trim()) {
          handleCommand(input);
          setInput('');
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  const commands = {
    help: () => [
      "\nAvailable commands:",
      "help - Show this help message",
      "clear - Clear the terminal",
      "about - Learn about this portfolio",
      "projects - List my projects",
      "skills - Show my technical skills",
      "contact - Get my contact information",
      "snake - Play the snake game",
      "exit - Return to the main page\n",
    ],
    clear: () => {
      setTerminalOutput([
        "Welcome to the Interactive Terminal!",
        'Type "help" to see available commands.\n',
      ]);
      return [];
    },
    about: () => [
      "\nAbout Me:",
      "I am a passionate developer who loves creating interactive experiences.",
      "This terminal is a fun way to explore my portfolio!\n",
    ],
    projects: () => [
      "\nMy Projects:",
      "1. E-commerce Platform - Full-stack shopping experience",
      "2. Social Media App - Real-time networking platform",
      "3. AI Chatbot - Intelligent customer service assistant\n",
    ],
    skills: () => [
      "\nTechnical Skills:",
      "Frontend: React, Vue, Angular",
      "Backend: Node.js, Python, Java",
      "Database: MongoDB, PostgreSQL",
      "DevOps: Docker, AWS, CI/CD\n",
    ],
    contact: () => [
      "\nContact Information:",
      "Email: example@email.com",
      "LinkedIn: linkedin.com/in/yourprofile",
      "GitHub: github.com/yourusername\n",
    ],
    snake: () => {
      startSnakeGame();
      return [];
    },
  };

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    if (command === "exit") {
      navigate("/lost-kid");
      return;
    }

    if (commands[command]) {
      setTerminalOutput((prev) => [
        ...prev,
        `> ${command}`,
        ...commands[command](),
      ]);
    } else {
      setTerminalOutput((prev) => [
        ...prev,
        `> ${command}`,
        'Command not found. Type "help" for available commands.',
      ]);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const handleAppClick = (app) => {
    switch (app) {
      case 'home':
        navigate('/');
        break;
      case 'terminal':
        // Already in terminal
        break;
      case 'back':
        navigate('/lost-kid');
        break;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#1d1d1f]">
      {/* MacBook Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${macbook})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Dock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
        <motion.div 
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer"
          onClick={() => handleAppClick('home')}
        >
          <FaHome className="text-white text-xl" />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center cursor-pointer"
          onClick={() => handleAppClick('terminal')}
        >
          <FaTerminal className="text-white text-xl" />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1, y: -10 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center cursor-pointer"
          onClick={() => handleAppClick('back')}
        >
          <FaArrowLeft className="text-white text-xl" />
        </motion.div>
      </div>

      {/* Menu Bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-black/30 backdrop-blur-md flex items-center px-4 text-xs text-white">
        <div className="flex items-center space-x-4">
          <span>Shaurya Verma</span>
        </div>
      </div>

      {/* Terminal Window */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1d1d1f] rounded-lg shadow-2xl overflow-hidden border border-gray-700/50"
        style={{
          boxShadow: '0 0 30px rgba(16, 185, 129, 0.2), 0 0 60px rgba(16, 185, 129, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Terminal Header */}
        <div className="h-6 bg-[#2d2d2f] flex items-center px-4 text-xs text-gray-400 border-b border-gray-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-2 text-gray-400">Terminal</div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="h-[calc(100%-24px)] bg-black/90 p-4 overflow-y-auto font-mono terminal-scrollbar"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.85))',
          }}
        >
          <div className="w-full text-left">
            {terminalOutput.map((line, index) => (
              <div 
                key={index} 
                className={`mb-1 whitespace-pre text-left ${
                  line.includes('Command not found') ? 'text-red-500' : 'text-green-400'
                }`}
              >
                {line}
              </div>
            ))}
            {gameState === 'snake' && (
              <div className="text-green-400 whitespace-pre font-mono">
                <div className="mb-2">Score: {score}</div>
                <div className="mb-2">Press Q to quit</div>
                <div className="bg-black/20 p-2 rounded inline-block leading-[0.8] tracking-[0.2em]">
                  {renderGame()}
                </div>
              </div>
            )}
            <div className="flex items-start text-left">
              <div className="text-green-400 flex items-center">
                <span className="mr-2">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent text-green-400 outline-none flex-1 text-left"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .terminal-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .terminal-scrollbar::-webkit-scrollbar-track {
          background: rgba(26, 26, 26, 0.5);
        }
        
        .terminal-scrollbar::-webkit-scrollbar-thumb {
          background: #10B981;
          border-radius: 2px;
        }
        
        .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
        
        .terminal-scrollbar::-webkit-scrollbar-corner {
          background: rgba(26, 26, 26, 0.5);
        }

        /* Add a subtle glow effect to the terminal */
        .terminal-window {
          position: relative;
        }

        .terminal-window::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, #10B981, transparent);
          border-radius: 8px;
          z-index: -1;
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default TerminalFun;
