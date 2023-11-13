import { limitToLast, off, onValue, push, query, ref, set } from "firebase/database";
import { useCallback, useEffect, useMemo, useState } from "react";
import { database } from "../services/firebase";
import { Chats, Message, MessageContent } from "../databases/types";

export const useChats = () => {
    const path = 'posts'; // TODO: change this to chats correct path

    const [isAddingChat, setIsSendingMessage] = useState<boolean>(false);
    const [chats, setChats] = useState<Chats>();

    // Database refs
    const chatsRef = useMemo(() => ref(database, path), [database, path]);
    const queriedChatsRef = useMemo(() => query(chatsRef), [chatsRef]);
    const newMessageRef = push(chatsRef);

    useEffect(() => {
        onValue(queriedChatsRef, (snapshot) => {
            const data = snapshot.val();
            
            // * NOTE: this is mock chat
            // data['mock-content'] = {
            //     content: {
            //         type: 'contact',
            //         img: 'https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144855718.jpg',
            //         name: 'Ken',
            //         quote: 'Hello World!'
            //     },
            //     senderId: 'ken',
            //     timestamp: 1000,
            // }

            console.log('[debug] data:', data);
            setChats(data);
        });

        return () => {
            off(queriedChatsRef);
        }
    }, [queriedChatsRef])

    const sendMessage = useCallback(async (content: MessageContent) => {
        setIsSendingMessage(true);

        const message: Message = {
            senderId: 'mockid',
            timestamp: new Date().getUTCMilliseconds(),
            content,
        }
        await set(newMessageRef, message);

        setIsSendingMessage(false);
    }, [newMessageRef]) 

    return { chats, addChat: sendMessage, isAddingChat }
}