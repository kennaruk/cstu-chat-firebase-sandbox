type MessageType = 'text' | 'instagram';
interface MessageText {
    type: 'text';
    text: string;
}
interface MessageInstagram {
    type: 'instagram';
    url: string;
}
interface ContactCard {
    type: 'contact'
    img: string;
    name: string;
    quote: string;
}
export type MessageContent = MessageText | MessageInstagram | ContactCard;

export interface Message {
    senderId: string;
    timestamp: number;
    content: MessageContent;
}

export interface Chats {
    [chatId: string]: Message;
}

// organizations (collection)
// └── ...

// publicChatRooms (collection)
// └── ...
//     ├── messages (subcollection)
//     │   └── message_id (document)
//     │       ├── type: "text" or "instagram"
//     │       ├── content: "Message Text" or "Instagram Iframe"
//     │       ├── senderId: "user_id"
//     │       ├── timestamp: Timestamp
//     │       └── pinned: false
//     └── ...

// users (collection)
// └── ...

// pinnedMessages (collection)
// └── ...
//     ├── pinnedMessages: [ message_id, ... ]
//     └── ...