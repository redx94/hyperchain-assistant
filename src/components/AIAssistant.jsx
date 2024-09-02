import React, { useState } from 'react';
import { MessageSquareIcon, SendIcon, XIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setConversation([...conversation, { type: 'user', content: message }]);
      // TODO: Implement AI response logic
      const aiResponse = "I'm an AI assistant. How can I help you with blockchain tasks?";
      setConversation(prev => [...prev, { type: 'ai', content: aiResponse }]);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-96 h-[500px] flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Assistant</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <XIcon size={20} />
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[380px] pr-4">
              {conversation.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {msg.content}
                  </span>
                </div>
              ))}
            </ScrollArea>
            <div className="flex mt-4">
              <Input
                type="text"
                placeholder="Ask about blockchain..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-grow mr-2"
              />
              <Button onClick={handleSendMessage}>
                <SendIcon size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
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