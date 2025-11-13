import { Bot, Send, MessageSquare, Sparkles } from 'lucide-react';
import { useState } from 'react';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "🌾 Hello! I'm your AI farming assistant. How can I help you today?" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickQuestions = [
    "What's the best time to plant wheat?",
    "How do I improve soil health?",
    "Tell me about PM-KISAN scheme",
    "What fertilizers for rice crop?"
  ];

  // Call your backend API instead of calling Gemini directly
  const callBackendAPI = async (prompt) => {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.text;
    } catch (error) {
      console.error('Backend API Error:', error);
      throw error;
    }
  };

  // Handle user message sending
  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    setMessages(prev => [...prev, { type: 'user', text: userText }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiText = await callBackendAPI(userText);
      setMessages(prev => [...prev, { type: 'bot', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "⚠️ Sorry, I couldn't fetch that answer. Please make sure the backend server is running on http://localhost:5000" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle quick question click
  const handleQuickQuestion = async (question) => {
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    setIsLoading(true);

    try {
      const aiText = await callBackendAPI(question);
      setMessages(prev => [...prev, { type: 'bot', text: aiText }]);
    } catch (error) {
      console.error("Quick question error:", error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "⚠️ Sorry, I couldn't fetch that answer. Please check your backend server." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <Bot size={20} />
            <span className="font-semibold text-sm uppercase tracking-wider">AI Assistant</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            24/7 AI Farming Assistant
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get instant answers to your farming questions, anytime, anywhere
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-6 flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-3">
              <Bot size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold">KrishiSahayak AI</h2>
              <p className="text-sm text-white/80">Always here to help</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-8 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-6 py-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-purple-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 shadow-md rounded-bl-none'
                  }`}
                >
                  {message.type === 'bot' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Bot size={16} className="text-purple-600" />
                      <span className="text-xs font-semibold text-purple-600">AI Assistant</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-gray-600 px-6 py-4 rounded-2xl shadow-md animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div className="px-8 py-4 bg-white border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3 font-medium">Quick Questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  disabled={isLoading}
                  className="px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-200">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder="Ask me anything about farming..."
                disabled={isLoading}
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none text-gray-800 disabled:bg-gray-100"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} />
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          What I Can Help You With
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <MessageSquare className="w-10 h-10 text-purple-600" />,
              title: "Crop Advice",
              description: "Get guidance on crop selection, planting times, and best practices"
            },
            {
              icon: <Sparkles className="w-10 h-10 text-indigo-600" />,
              title: "Scheme Information",
              description: "Learn about government schemes and how to apply for them"
            },
            {
              icon: <Bot className="w-10 h-10 text-purple-600" />,
              title: "24/7 Support",
              description: "Available anytime to answer your farming questions"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="bg-purple-50 rounded-xl p-4 w-fit mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIChatbot;