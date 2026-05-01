'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import styles from './ChatWidget.module.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Welcome to La Orchid! How can we assist you today?', isUser: false },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Thank you for your message! Our concierge will be with you shortly. For immediate assistance, please call +1 234 567 890.', 
        isUser: false 
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <motion.button
        className={styles.chatButton}
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className={styles.chatHeader}>
              <div>
                <h4>Live Concierge</h4>
                <span>Online now</span>
              </div>
              <button onClick={toggleChat} className={styles.closeBtn}>
                <X size={20} />
              </button>
            </div>

            <div className={styles.chatMessages}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${styles.message} ${msg.isUser ? styles.userMessage : styles.botMessage}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className={styles.chatInput}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
              />
              <button onClick={sendMessage} className={styles.sendBtn}>
                <Send size={18} />
              </button>
            </div>

            <a href="tel:+1234567890" className={styles.callButton}>
              <Phone size={16} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}