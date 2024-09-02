import React, { useState } from 'react';
import { MessageSquareIcon, SendIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // TODO: Implement AI assistant logic
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <MessageSquareIcon size={20} />
            </Button>
          </div>
          <div className="h-64 overflow-y-auto mb-4 bg-gray-100 rounded p-2">
            {/* TODO: Display conversation history */}
          </div>
          <div className="flex">
            <Input
              type="text"
              placeholder="Ask a question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow mr-2"
            />
            <Button onClick={handleSendMessage}>
              <SendIcon size={20} />
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setIsOpen(true)}>
          <MessageSquareIcon size={20} className="mr-2" />
          AI Assistant
        </Button>
      )}
    </div>
  );
};

export default AIAssistant;