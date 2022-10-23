import { useState } from "react";

const Sidebar = (props) => {
    
    const menus = [
        { name: "Dashboard", url: "/dashboard", disabled:false, icon:"x" },
        { name: "Content", url: "/content", disabled:false },
        { name: "Quiz", url: "/quiz-history", disabled:false },
        { name: "Store", url: "/store", disabled:false },
      ];

    const [showSidebar, setShowSidebar] = useState(props.is_active)

    return (
            <>
                {showSidebar ? (
                    <button
                    className="hidden md:block flex text-2xl text-black items-center cursor-pointer fixed left-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                    >
                    x
                    </button>
                ) : (
                    <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="hidden md:block fixed  z-30 flex items-center cursor-pointer left-10 top-6"
                    fill="#2563EB"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                    >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                    </svg>
                )}

                <div className={`hidden md:block fixed top-0 left-0 bg-white-600 border-r-2 border-gray-500 p-10 pl-20 text-white h-full z-40 ease-in-out duration-100 ${showSidebar ? "w-[20vw] translate-x-0": "w-[0vw] -translate-x-full"}`}>
                    <div className="flex flex-col">
                    {showSidebar ? (
                            menus.map((menu) => (
                                <a href={menu.url} className="my-2">
                                <button className={ 
                                    ( menu.disabled ? "w-[40px] bg-gray-100 text-gray-600 font-semibold py-2 px-4 rounded shadow": "w-[140px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow")}
                                    type="button" disabled={menu.disabled}>
                                    <span
                                    className="w-1/3 mx-2"
                                    >{menu.icon}
                                    </span>
                                    {menu.name}
                                </button>
                                </a>
                            ))
                            ):""}
                    </div>
                </div>

                <section
                    class="block md:hidden fixed bottom-0 inset-x-0 z-50 shadow-lg text-gray-800 bg-gray-700 dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400 border-t-2 border-royal/20">
                    <div id="tabs" class="flex justify-between">
                        <a href="#"
                        class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeClass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span class="tab block text-xs">Home</span>
                        </a>
                        <a href="#"
                        class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeClass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span class="tab block text-xs">Categories</span>
                        </a>
                        <a href="#"
                        class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeClass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="tab block text-xs">Gallery</span>
                        </a>
                        <a href="#"
                        class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeClass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span class="tab block text-xs">About</span>
                        </a>
                    </div>
                </section>
            </>
    )
}
export default Sidebar;