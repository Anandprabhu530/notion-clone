import { useState } from "react";

const Header = () => {
  const [menu, setmenu] = useState(true);
  return (
    <div className="fixed top-0 w-full bg-white z-50 border-b-2">
      <div className="flex m-4 lg:m-0 ">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M11 17.5v-6.5h.5l4 6h.5v-6.5" />
            <path d="M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997z" />
            <path d="M4.5 5.5l2.5 2.5" />
            <path d="M20 7l-13 1v12.5" />
          </svg>
          <div className="font-semibold">Notion</div>
        </div>
        <div className="absolute top-0 right-0 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 m-4"
            onClick={() => setmenu(!menu)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {menu && (
          <header className="mt-10 lg:mt-0 lg:flex lg:justify-between lg:p-4 absolute lg:static bg-white lg:bg-transparent w-[92%] lg:w-full pb-20">
            <div className="flex gap-4 font-sans flex-col lg:flex-row">
              <button className="hover:bg-slate-200 px-2 rounded-md">
                Product
              </button>
              <button className="hover:bg-slate-200 px-2 rounded-md">
                Download
              </button>
              <button className="hover:bg-slate-200 px-2 rounded-md">
                Solutions
              </button>
              <button className="hover:bg-slate-200 px-2 rounded-md">
                Resources
              </button>
              <button className="hover:bg-slate-200 px-2 rounded-md">
                Pricing
              </button>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
              <button className="hover:bg-slate-200 px-2 rounded-md">
                Request A Demo
              </button>
              <button className="hover:bg-slate-200 px-2 rounded-md">
                Login
              </button>
              <button className="px-2 py-1 rounded-md text-sm font-sem bg-black text-white">
                Get Notion free
              </button>
            </div>
          </header>
        )}
      </div>
    </div>
  );
};

export default Header;
