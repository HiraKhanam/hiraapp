import React, { useState } from "react";

// First import useState from react hooks
function index() {
  // name and call the state
  const [hide, setHide] = useState(false);
  return (
    <>
      <div>
        {/* in curly bracket call state */}
        {/* I expect u too know what && and ? means */}
        {hide && (
          <div className="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center">
              <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow pt-10 pb-8 rounded">
                <div className="flex flex-col items-center px-4 md:px-12">
                  <img src="https://i.ibb.co/QDMrqK5/Saly-10.png" />
                  <p className="text-base sm:text-lg md:text-2xl font-bold md:leading-6 mt-6 text-gray-800 text-center dark:text-gray-100">Don’t miss any Update</p>
                  <p className="text-xs sm:text-sm leading-5 mt-2 sm:mt-4 text-center text-gray-600 dark:text-gray-300">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                  <div className="flex items-center mt-4 sm:mt-6 w-full">
                    <div className="bg-gray-50 border rounded border-gray-200 dark:border-gray-700 dark:bg-gray-700 w-full">
                      <input className="w-full focus:outline-none pl-4 py-3 text-sm leading-none text-gray-600 dark:text-gray-100 bg-transparent placeholder-gray-600 dark:placeholder-gray-100" placeholder="Enter your email" />
                    </div>
                    <button className="px-3 py-3 bg-indigo-700 dark:bg-indigo-600 focus:outline-none hover:bg-opacity-80 ml-2 rounded">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Modal_39-svg1.svg" alt="message icon" />
                    </button>
                  </div>
                </div>
                <div className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-200 transition duration-150 ease-in-out" onClick={() => setHide(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Toggle state by onClick */}
        <div className="w-full flex justify-center py-12" onClick={() => setHide(true)}>
          <button className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm">Open Modal</button>
        </div>
      </div>
    </>
  );
}

export default index;
