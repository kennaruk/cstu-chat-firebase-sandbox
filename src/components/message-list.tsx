import { useEffect, useRef } from "react";
import { useChats } from "../hooks/useChats";
import { Message } from "./message";

export const MessageList = () => {
  const { chats } = useChats();

  const messagesEndRef = useRef<HTMLDivElement>(null);
 // Scroll to the bottom whenever the chats state changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  return (
    <div className="flex flex-col w-full space-y-3 overflow-y-scroll no-scrollbar">
        {Object.keys(chats || {}).map(key => {
          const chat = chats![key];
          return <Message 
            key={key} 
            message={chat}
          />
        })}
        <div ref={messagesEndRef} />
    </div>
  );
};
