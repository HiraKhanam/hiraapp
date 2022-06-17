import React from "react";

function index() {
  return (
    <>
      <div>
        <nav className="w-full border-b">
          <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
            <div aria-label="Home. logo" role="img">
              <img
                className="w-12 md:w-auto"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg"
                alt="logo"
              />
            </div>
            <div>
              <button
                onclick="toggleMenu(true)"
                className="dark:bg-white rounded sm:block md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-200 focus:text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <svg
                  aria-haspopup="true"
                  aria-label="open Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:hidden icon icon-tabler icon-tabler-menu"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              </button>
              <div id="menu" className="md:block lg:block hidden">
                <button
                  onclick="toggleMenu(false)"
                  className="dark:bg-white rounded block md:hidden lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-200 focus:text-gray-700 dark:text-gray-200 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6"
                >
                  <svg
                    aria-label="close main menu"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </button>
                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                  <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0">
                    <a href="javascript: void(0)">Feature</a>
                  </li>
                  <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">Marketplace</a>
                  </li>
                  <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">Company</a>
                  </li>
                  <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">Features</a>
                  </li>
                  <li className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 cursor-pointer text-base lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                    <a href="javascript: void(0)">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Sign In
            </button>
          </div>
        </nav>
        <div className="bg-gray-100 dark:bg-transparent">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-7 md:leading-10">
                The Freedom to Create the
                <span className="text-indigo-700">Websites</span>
                You Want
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
                A professonal website drives sales. Create a beautiful website
                to impress and engage new customers and establish your business
                online{" "}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
                Get Started
              </button>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Live Demo
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:px-0 px-4 py-16">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="sm:1/4 lg:w-1/2 flex justify-center items-center flex-col xl:w-2/5">
              <h1
                role="heading"
                className="lg:text-3xl xl:text-4xl text-2xl leading-6 lg:leading-9 f-m-w text-indigo-700  text-center font-bold pt-6"
              >
                Subscribe to our Newsletter
              </h1>
              <p
                role="contentinfo"
                className="lg:text-base lg:leading-6 text-sm font-light text-gray-800 dark:text-white text-center mt-2 lg:mt-3 f-m-m"
              >
                Sign Up for our weekly newsletter to get to know about exciting
                offers, our latest products ,the latest industry updates. and
                amazing offers delivered directly in your inbox.
              </p>
              <div
                className="sm:flex md:px-4 p-2 my-8 border border-indigo-700 dark:bg-gray-800  rounded w-full lg:w-4/5 mt-8 xl:mt-12 items-center "
                aria-label="Input Email"
              >
                <input
                  type="email"
                  className="py-2 dark:bg-gray-800 dark:placeholder-gray-200 dark:text-white w-full md:w-7/12 lg:w-full text-base placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your email"
                />
                <div className="w-full sm:w-5/12 sm:flex justify-end mt-4 sm:mt-0">
                  <button className="w-full sm:w-auto f-m-m md:text-base text-base rounded font-normal text-white bg-indigo-700 md:py-2 md:px-8 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 leading-4 hover:opacity-90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container lg:px-20 md:px-6 px-4 py-12">
          <div className="flex items-center justify-center flex-col">
            <h1 className="lg:text-5xl text-3xl font-bold leading-10 text-gray-800 dark:text-white text-center">
              Faces Behind Our Success
            </h1>
            <p className="text-base leading-6 text-center text-gray-600 dark:text-gray-200 mt-5 lg:w-5/12 sm:w-7/12">
              A good idiom for kids is "It's raining cats and dogs." Kids know
              what both cats and dogs are from an early age
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-12 pt-20">
            <div className="w-full flex items-center justify-center flex-col">
              <div className="w-full px-5 -mb-10  relative z-40">
                <img
                  src="https://i.ibb.co/85RFr5V/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash-1.png"
                  alt="girl smilling"
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                <p className="text-xl font-semibold leading-5 text-center text-white">
                  Anna Rose
                </p>
                <p className="text-base leading-4 mt-2 text-center text-white">
                  District Brand Associate
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="w-full px-5 -mb-10  relative z-40">
                <img
                  src="https://i.ibb.co/fNyc2Tg/austin-distel-7uo-Mmz-Pd2-JA-unsplash-1.png"
                  alt="guy smilling"
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                <p className="text-xl font-semibold leading-5 text-center text-white">
                  Jack Daniels
                </p>
                <p className="text-base leading-4 mt-2 text-center text-white">
                  Lead Communications Developer
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="w-full px-5 -mb-10  relative z-40">
                <img
                  src="https://i.ibb.co/F4pdTRP/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.png"
                  alt="girl smilling"
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
                <p className="text-xl font-semibold leading-5 text-center text-white">
                  Cindy Williams
                </p>
                <p className="text-base leading-4 mt-2 text-center text-white">
                  Corporate Integration Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            id="button"
            className="hidden container mx-auto flex justify-center items-center px-10 py-20"
          >
            <button
              onclick="openModal()"
              className="text-gray-800 font-semibold border rounded-md bg-white py-5 px-10 focus:outline-none hover:bg-gray-200"
            >
              Show Modal
            </button>
          </div>
          <div id="modal" className="flex items-center justify-center py-12">
            <div className="bg-white dark:bg-gray-800 dark:border-transparent border rounded-md mx-4 md:w-10/12 flex items-center justify-center relative">
              <div className="relative z-10 w-full">
                <div className="flex flex-col justify-center pt-10 pb-12 px-4 md:px-10">
                  <div className="absolute top-5 right-5">
                    <button onclick="closeModal()" />
                  </div>
                  <p className="text-sm leading-none dark:text-white text-center md:pt-0 pt-3">
                    Try free for 30 days -{" "}
                    <u className="no-underline text-indigo-700 dark:text-indigo-400">
                      No credit card required
                    </u>
                  </p>
                  <h1 className="pt-4 pb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white ">
                    Get new products every months in your inbox!
                  </h1>
                  <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-7">
                    <input
                      type="email"
                      placeholder="Enter you email to join"
                      className="bg-white dark:bg-gray-600 dark:placeholder-gray-200 dark:border-gray-700 dark:text-white border rounded-md placeholder-gray-300 border-gray-300 p-4 w-full lg:w-1/2 focus:outline-none"
                    />
                    <button className="px-8 py-4 bg-indigo-700 rounded-md text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-opacity-50 hover:bg-indigo-800 w-full md:w-auto">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
