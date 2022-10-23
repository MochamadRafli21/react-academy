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

                <div className={`hidden md:block fixed top-0 left-0 bg-white-600 border-r-2 border-gray-500 p-10 pl-20 text-white h-full z-40 ease-in-out duration-100 ${showSidebar ? "md:w-1/3 lg:w-[24vw] translate-x-0": "w-[0vw] -translate-x-full"}`}>
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
                        {
                            menus.map((menu) => (
                                <a href={menu.url}
                                class="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                                activeClass="dark:text-gray-100 text-black">
                                    {menu.icon}
                                    <span class="tab block text-xs">{menu.name}</span>
                                </a>
                            ))

                        }
                    </div>
                </section>
            </>
    )
}
export default Sidebar;