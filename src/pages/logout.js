import React from 'react'
import { useRouter } from 'next/router';
import { signOut} from 'next-auth/react'
const logout = () => {
    const router = useRouter();
    const handleLogout=async(e)=>{
        e.preventDefault();
        await signOut({redirect:false});
        router.push('/');
    }
    const handleCancel=async(e)=>{
    e.preventDefault();
    router.push({
      pathname: "/profile",
    });
    }
  return (
    <div className="flex flex-col align-middle items-center bg-gray-800 absolute top-0 left-0 right-0 bottom-0 justify-center flex-wrap backdrop-blur-sm">
    <div className="relative w-96 h-96 bg-black rounded-3xl flex flex-col items-center justify-center font-bold shadow shadow-black">
      <div className="flex flex-col items-start px-4">
        <h3 className="text-white text-2xl py-1 px-5 font-bold font-sans">
         Do you Want to Log out ?
        </h3>

        <span className=" px-5 text-gray-600 text-md  font-sans py-1 font-normal ">
          You can always log back in at any time. If you just want to switch
          accounts, you can do that by adding an existing account.
        </span>
      </div>
      <div className="w-72 h-44 flex-col items-center justify-center py-5">
        <button
          className="flex items-center w-72 h-10 bg-white hover:opacity-40 hover:transition-all hover:duration-200  font-bold justify-center font-sans text-lg rounded-full my-3 b-2 outline-none text-black "
          onClick={handleLogout}
        >
          Log out?
        </button>
        <button
          className="flex items-center tracking-normal leading-3 w-72 h-10 hover:bg-slate-600 bg-transparent outline-none font-bold justify-center font-sans text-lg rounded-full my-3 b-2 border-white border-solid border text-white"
          onClick={handleCancel}
        >
          Cancel ?
        </button>
      </div>
    </div>
  </div>
  )
}

export default logout