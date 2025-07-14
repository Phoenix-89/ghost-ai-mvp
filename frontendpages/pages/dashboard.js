import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'user-id', message }),
    });
    const { text, audio } = await response.json();
    setChat([...chat, { user: message, ghost: text, audio }]);
    setMessage('');
  };

  return (
    <div className="bg-gradient-to-br from-[#0C0C0C] via-[#1C2526] to-[#2CB67D] min-h-screen">
      <Head>
        <title>Dashboard - Ghost AI</title>
      </Head>
      <Nav />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold gradient-text mb-4">Talk to Your Ghost</h1>
          <div className="bg-[#1C1C1E] p-6 rounded-lg">
            <div className="chat-box h-96 overflow-y-auto mb-4">
              {chat.map((msg, i) => (
                <div key={i}>
                  <p className="text-[#F5F5F5]"><strong>You:</strong> {msg.user}</p>
                  <p className="text-[#2CB67D]"><strong>Ghost:</strong> {msg.ghost}</p>
                  {msg.audio && <audio src={msg.audio} controls />}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 bg-[#0C0C0C] text-[#F5F5F5] rounded"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="cta-button bg-[#7F5AF0] text-white px-4 py-2 rounded mt-2"
            >
              Send
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}