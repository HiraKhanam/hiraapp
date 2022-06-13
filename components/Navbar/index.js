import React from "react";

export default function index() {
  return (
    <>
    <nav role="navigation" class="md:px-6 lg:px-4 w-full mx-auto hidden md:block bg-white dark:bg-gray-800  shadow-md">
                <div class="container mx-6 justify-between h-20 flex items-center bg-white dark:bg-gray-800  md:items-stretch mx-auto border-b border-gray-200">
                    <div class="h-full flex items-center">
                        <button role="img" aria-label="logo" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mr-10 flex items-center">
                            <img class="dark:bg-white  p-1 rounded-full" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg1.svg" alt="logo" />
                        </button>
                        <ul class="pr-12 md:flex items-center h-full hidden">
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 dark:text-white   tracking-normal ">Dashboard</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 dark:text-white   mx-6 tracking-normal">Transactions</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 dark:text-white   mr-6 tracking-normal">Stats</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 dark:text-white   mr-6 tracking-normal">Partners</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 dark:text-white   mr-6 tracking-normal">Settings</a>
                            </li>
                        </ul>
                    </div>
                    <div class="md:flex items-center justify-end hidden">
                        <div class="flex items-center">
                            <div class="md:pr-10 lg:pr-0 h-full flex items-center">
                                <div class="relative">
                                    <div class="text-gray-600 dark:text-gray-200  absolute ml-3 inset-0 m-auto lg:w-4 lg:h-4 md:w-6 md:h-6">
                                        <img class="text-gray-600 dark:text-gray-200  stroke-current icon icon-tabler icon-tabler-search" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg2.svg" alt="search" />
                                    </div>
                                    <input class="hidden lg:block border border-gray-200 focus:outline-none focus:border-indigo-700 w-64 rounded text-sm text-gray-800 dark:text-white   pl-8 py-2" type="text" placeholder="Search here" />
                                </div>
                            </div>
                            <div class="h-full flex items-center">
                                <button aria-label="show notifications" class="relative focus:outline-none focus:text-indigo-700 hover:text-indigo-700 focus:border-indigo-700 hover:border-indigo-700 mx-5 h-full flex items-center justify-center text-gray-600 dark:text-gray-200  cursor-pointer">
                                    <svg class="icon icon-tabler icon-tabler-bell" xmlns="http://www.w3.org/2000/svg"  width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                    </svg>
                                    <div class="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                                        <div class="animate-ping w-2 h-2 rounded-full bg-blue-400"></div>
                                    </div>
                                </button>
                            </div>
                            <div class="h-full flex items-center">
                                <button aria-label="dropdown" class="focus:outline-none focus:text-gray-900 text-gray-800 dark:text-white   border-b-2 border-transparent focus:border-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer" onclick="dropdownHandler(this)">
                                    <img class="rounded-full h-10 w-10 object-cover" src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png" alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1" alt="logo" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center md:hidden">
                        <ul class="p-2 border-r bg-white dark:bg-gray-800  absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                            <li class="flex md:hidden cursor-pointer text-gray-600 dark:text-gray-200  text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div class="flex items-center">
                                    <span class="ml-2 font-bold">Dashboard</span>
                                </div>
                            </li>
                            <li class="flex md:hidden flex-col cursor-pointer text-gray-600 dark:text-gray-200  text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                <div class="flex items-center">
                                    <span class="ml-2 font-bold">Products</span>
                                </div>
                            </li>
                            <li class="flex md:hidden flex-col cursor-pointer text-gray-600 dark:text-gray-200  text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                <div class="flex items-center">
                                    <span class="ml-2 font-bold">Performance</span>
                                </div>
                            </li>
                            <li class="border-b border-gray-300 flex md:hidden cursor-pointer text-gray-600 dark:text-gray-200  text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <span class="ml-2 font-bold">Deliverables</span>
                            </li>
                            <li class="cursor-pointer text-gray-600 dark:text-gray-200  text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <div class="flex items-center">
                                    <div class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                        <img class="rounded h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png" alt="logo" />
                                    </div>
                                    <p class="text-sm ml-2 cursor-pointer">Jane Doe</p>
                                    <div class="sm:ml-2 text-gray-800 dark:text-white   relative">
                                        <img class="icon icon-tabler icon-tabler-chevron-down cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg4.svg" alt="chevron down" />
                                    </div>
                                </div>
                            </li>
                            <li class="cursor-pointer text-gray-600 dark:text-gray-200  text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx="12" cy="7" r="4" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                    <span class="ml-2">Profile</span>
                                </div>
                            </li>
                            <li class="cursor-pointer text-gray-600 dark:text-gray-200  text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                </svg>
                                <span class="ml-2">Sign out</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="container justify-between h-12 flex items-center bg-white dark:bg-gray-800  md:items-stretch mx-auto">
                    <div class="h-full flex items-center">
                        <ul class="pr-12 md:flex items-center h-full hidden">
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent leading-none cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-600 dark:text-gray-200 ">Home</a>
                            </li>
                            <li>
                                <img class="mx-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg3.svg" alt="icon-1" />
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent leading-none cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-600 dark:text-gray-200 ">Resource Manager</a>
                            </li>
                            <li>
                                <img class="mx-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg5.svg" alt="icon2" />
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="focus:outline-none border-b-2 border-transparent leading-none cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-600 dark:text-gray-200  mr-14">Job Applications</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  );
}