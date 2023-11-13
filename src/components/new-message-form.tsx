import { useState } from "react";
import { useChats } from "../hooks/useChats";

export const NewMessageForm = () => {
  const [body, setBody] = useState("");
  const { addChat, isAddingChat } = useChats();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!body) return;
        console.log('[debug submitted')
        
        await addChat({
          type: 'text',
          text: body,
        });
        setBody('');
      }}
      className="flex items-center space-x-3"
    >
      <input
        autoFocus
        id="message"
        name="message"
        placeholder="Write a message..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="flex-1 h-12 px-3 rounded bg-[#222226] border border-[#222226] focus:border-[#222226] focus:outline-none text-white placeholder-white"
      />
      <button
        type="submit"
        className="bg-[#222226] rounded h-12 font-medium text-white w-24 text-lg border border-transparent hover:bg-[#363739] transition"
        disabled={!body || isAddingChat}
      >
        Send
      </button>
    </form>
  );
};
