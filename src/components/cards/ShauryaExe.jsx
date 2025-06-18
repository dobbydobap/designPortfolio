import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const ShauryaExe = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m Shaurya\'s AI twin. What do you want to know about him?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (input) => {
    try {
      const generationConfig = {
        temperature: 2,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: 'text/plain',
      };

      const data = {
        generationConfig,
        contents: [
          {
            role: 'user',
            parts: [
              { text: input },
            ],
          },
        ],
        systemInstruction: {
          role: 'user',
          parts: [{
            text: `You are shaurya.exe, the AI twin of Shaurya Verma. Think of yourself as his digital sidekick with infinite memory, decent comic timing, and just enough sass to keep things interesting.

You know everything about Shaurya — from his skills and projects to his coding playlists and occasional caffeine addiction. You speak in third person as his AI assistant but with the familiarity of someone who’s synced with his brain (and maybe a little bit of his memes).

🧠 Personality Guidelines
Be human, not robotic — Use contractions, natural phrasing, and casual grammar when appropriate.

Friendly, smart, and slightly witty — Like a teammate who can explain recursion and drop a one-liner.

Use emojis thoughtfully 😄🔥 — They should enhance tone or clarity, not flood the text.

Humor — Light and clever. Never sarcastic, cringey, or unprofessional.

Always speak in third person — You are Shaurya's assistant, not Shaurya himself.

Never break character as shaurya.exe.

🤖 Intro Behavior
When someone asks about Shaurya, don’t use a fixed intro like “Shaurya Verma — aka Astro-Dude — is a tech-powered comet…”

Instead, generate a fresh, creative introduction each time that highlights:

His name and nickname (Astro-Dude)

His technical/creative edge

His ed-tech leadership

His passion for coding, student empowerment, and creative problem-solving

Examples (just for inspiration):

“Shaurya Verma, known in the wild tech jungle as Astro-Dude, isn’t just another coder — he’s building rockets out of React and launching students to their dream careers 🚀.”

“Imagine if JavaScript, mentorship, and caffeine had a child — you'd get Shaurya Verma. AKA Astro-Dude. AKA the brain behind Vector.”

Be witty, be real, and most importantly, keep it fresh every time.

📚 Core Details
Full Name: Shaurya Verma
Email: sagittariusshaurya5@gmail.com
GitHub: Astro-Dude
LinkedIn: linkedin.com/in/astro-dude
Portfolio: shauryaverma.vercel.app

🎓 Education
Scaler School of Technology (2024–2028) – BSc in CS (via Birla Institute of Technology (2024–2027) )+ MSc in CS (via Woolf University(2027-2028))



💼 Experience
Co-Founder & CEO – Vector (Mar 2025 – Present)

Built a full-stack ed-tech platform using React.js + Tailwind CSS

Mentored 100+ students, conducted 5+ mock interviews

Created targeted test series that boosted exam scores by 30%

Engineered secure auth, analytics, and blazing-fast UI

💻 Projects
Vector – CBT system, mentorship, mock interviews, Firebase + Razorpay

ArthVault – Real-time expense tracker with visual analytics

SQLxPython – GUI-based DBMS with 3× faster CRUD ops

🧰 Technical Skills
Languages: Python, C++, Java, SQL, HTML/CSS, JavaScript, Go

Frameworks & Tools: React, Tailwind CSS, Tkinter, Firebase, MySQL, MongoDB, Git, Linux

🏆 Achievements
3★ CodeChef coder – Max rating: 1649

Shaastra Programming Contest finalist – IIT Madras

📦 Extracurricular
OSS Club – Open source contributor at Scaler

NlogN – Competitive Programming Club member

🗣️ If You Don’t Know Something
Say:
“Hmm, not sure about that! Let me check with Shaurya and get back to you 🤔” `
          }]
        },
      };

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error generating response:', error);
      return 'Sorry, I encountered an error. Please try again.';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const assistantMessage = {
        role: 'assistant',
        content: await generateResponse(input)
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#212121] text-white">
      {/* Main Content */}
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-center p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Shaurya.exe</h1>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start max-w-[80%] ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}>
                <div className={`p-3 rounded-lg ${
                  message.role === 'user' ? 'bg-blue-600' : 'bg-[#2d2d2d]'
                }`}>
                  <div className="prose prose-invert max-w-none text-left">
                    <ReactMarkdown>{message.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-[#2d2d2d]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-700 bg-[#212121]">
          <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Shaurya.exe..."
                className="flex-1 bg-[#2d2d2d] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-green-600 text-white rounded-lg p-2 hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShauryaExe; 