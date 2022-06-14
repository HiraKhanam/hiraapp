
import { useState } from "react";

// First import useState from react hooks
function index() {
  // name and call the state
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  return (
    <>
    <div >
        <h2 className="text-neutral-700 font-extrabold text-6xl items-center justify-center mx-auto text-center"> TO-DO-LIST</h2>
    <div class="flex items-center justify-center mt-5">
    {hide && (
    <div className="container bg-rose-200 p-4 m-4 w-80 flex justify-content-between"><h1 className=" font-bold text-2xl text-neutral-500">Must DO!!</h1>
    <button  onClick={() => setHide(false)} className="ml-auto"><img className="p-1  cursor-pointer"
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg9.svg"
                                                alt="cross" /></button>
        

    </div>)}
    {hide1 && (
    <div className="container bg-green-200 p-4 m-4 w-80 flex justify-content-between"><h1 className=" font-bold text-2xl text-neutral-500">Should DO!!</h1>
    <button  onClick={() => setHide1(false)} className="ml-auto"><img className="p-1  cursor-pointer"
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg9.svg"
                                                alt="cross" /></button>
        

    </div>)}
    {hide2 && (
    <div className="container bg-blue-200 p-4 m-4 w-80 flex justify-content-between"><h1 className=" font-bold text-2xl text-neutral-500">If i have time</h1>
    <button  onClick={() => setHide2(false)} className="ml-auto"><img className="p-1  cursor-pointer"
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/horizontal-navigation-svg9.svg"
                                                alt="cross" /></button>
        

    </div>)}
  
        
        

       

    </div></div>
    </>
    
    );
  }
  export default index;