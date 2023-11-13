import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Chats from './pages/chats';
import Chat from './pages/chat';
import { ContactCard } from './pages/contact-card';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactCard/>,
  },
  {
    path: "/qr",
    element: <div>QR</div>,
  },
  {
    path: "/chats",
    element: <Chats/>,
  },
  {
    path: "/chat",
    element: <Chat/>,
  },
  {
    path: "/admin",
    element: <div>Admin</div>,
  },
]);

function App() {
  return (
    <RouterProvider 
      router={router} 
    />
  )
}

export default App
