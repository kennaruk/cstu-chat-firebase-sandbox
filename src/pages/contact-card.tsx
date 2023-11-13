import { useChats } from "../hooks/useChats"
import { isDeployedWebsiteAndOpenedOnMobile } from "../utils"

const data = {
    img: 'https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    name: 'สเตฟานี่ ไบรท์',
    quote: 'อยากให้เธอกินคลีนจัง เธอจะได้ลดของมัน แล้วมาเป็นของเรา'
}
export const ContactCard = () => {
    const { addChat } = useChats()

    return <div className="mx-5 min-h-screen grid place-content-center">
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
      <p className="text-lg">{data.quote}</p>
    </div>
    <div className="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
      <h2 className="font-semibold text-2xl mb-6 text-black">Start sending a message as</h2>
      <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src={data.img} alt="User avatar"/>
      <p className="capitalize text-xl mt-1 text-black">{data.name}</p>
      <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12 text-black"></span>
      <button 
      disabled={!isDeployedWebsiteAndOpenedOnMobile()}
      onClick={() => {
        addChat({
            type: 'contact',
            ...data,
        })
      }}
      className="disabled:from-slate-600 disabled:opacity-20 rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">Send a message</button>
      {!isDeployedWebsiteAndOpenedOnMobile() && <p className="text-red-600 text-xs">Please deploy & open this on mobile!</p>}
    </div>
      </div>
}