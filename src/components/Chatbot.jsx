import React, { useState, useRef, useEffect } from 'react';
import '../styles/Chatbot.css';
import axios from 'axios';  
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [typing, setTyping] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const chatEndRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!userMessage.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg = { sender: 'user', text: userMessage, time };
    setMessages((prev) => [...prev, userMsg]);
    setUserMessage('');
    triggerBotReply();
  };

  const triggerBotReply = () => {
    setTyping(true);
    setTimeout(() => {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const botMsg = {
        sender: 'bot',
        text: "Thanks for reaching out! Since all of our agents are busy we're currently unavailable. Please fill out the form below for assistance.",
        time,
        isPrompt: true,
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 1000);
  };

  
const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post('http://localhost:5000/api/contact', formData);   // Same as Contact.jsx
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages([
      { sender: 'bot', text: 'Thank you! We have received your details and will contact you soon.', time }
    ]);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setShowForm(false);

    setTimeout(() => {
      setMessages([
       
      ]);
    }, 2000);
  } catch (error) {
    console.error('Failed to submit chatbot form:', error);
    alert('Failed to send your message. Please try again later.');
  }
};


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  return (
    <>
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src="/images/avatar-icon.png" alt="Chatbot Icon" />
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>🤖 Support Assistant</span>
            <button onClick={toggleChatbot}>×</button>
          </div>

          <div className="chatbot-body">
            <div className="message bot">Hi! Welcome to Intersect India Private Limited <br/> How can I help you today?</div>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
                <div className="timestamp">{msg.time}</div>
                {msg.isPrompt && (
                  <button className="ok-button" onClick={() => setShowForm(true)}>Fill the form</button>
                )}
              </div>
            ))}

            {typing && <div className="message bot typing">Bot is typing...</div>}

            <div ref={chatEndRef} />
          </div>

          {!showForm ? (
            <div className="chatbot-footer">
              <input
                type="text"
                placeholder="Type your message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          ) : (
            <form className="chatbot-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone (10 digits)"
                pattern="\d{10}"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                placeholder="Your message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
