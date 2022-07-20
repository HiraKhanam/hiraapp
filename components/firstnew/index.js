import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-20">
          <Image src="/Group.png" width={56} height={72} className="my-auto" />
          <ul className="flex">
            <li className="pr-8 ">
              <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                Bedroom
              </a>
              <Image src="/Vector.png" width={8} height={4} />
            </li>
            <li className="pr-8 ">
              <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                Living Room
              </a>
              <Image src="/Vector.png" width={8} height={4} />
            </li>
            <li className="pr-8 ">
              <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                Dining & Kitchen
              </a>
              <Image src="/Vector.png" width={8} height={4} />
            </li>
            <li className="pr-8 ">
              <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                Office
              </a>
              <Image src="/Vector.png" width={8} height={4} />
            </li>
          </ul>
          <div>
            <Image src="/Group 6.png" width={20} height={20} />
            <Image src="/Group 260.png" width={20} height={20} />
          </div>
        </div>
        <div className="flex pt-20 bg-rose-50 p-20">
          <div className=" pt-20 xl:w-6/12 2xl:w-full pr-8">
            <h1 className="text-6xl  leading-15  font-semibold text-gray-800">
              The Glory Cambalk furniture
            </h1>
            <p className="pt-4  text-base font-normal leading-6 pt-4 pb-10 text-gray-600">
              Avoid the hassle of physically visiting a store and order your
              favorite product with a few clicks online for the best wood
              furniture design. Free delivery is available.
            </p>
            <button className="text-2xl font-medium bg-gray-800 text-white py-7 px-10 rounded-xl">
              Shop Now
            </button>
          </div>
          <div>
            <Image
              src="/image 5.png"
              width={549}
              height={491}
              className="pb-20  xl:w-6/12 2xl:w-full"
            />
          </div>
        </div>
        <div className="px-20 flex items-center pt-20 pb-28">
          <h2 className="text-gray-800 text-4xl font-semibold xl:w-6/12 2xl:w-full">
            Why Choose Us?
          </h2>
          <div className="justify-center items-center xl:w-6/12 2xl:w-full">
            <div className="bg-teal-100 mx-auto justify-center text-center w-52 py-20 px-8  rounded-full outline-offset-4 outline-2 outline-dashed outline-teal-200">
              <Image src="/Group 297.png" width={22} height={18} />
              <p className="font-medium "> SAFE SHIPPING</p>
              <p className="text-gray-600 ">
                In all major cities across the country
              </p>
            </div>
            <div className="flex">
              <div className="mr-20 bg-rose-50 justify-center text-center  py-20 px-8  rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
                <Image src="/Group dollar.png" width={10} height={18} />
                <p className="font-medium "> COMPETITIVE PRICES</p>
                <p className="text-gray-600 w-40">
                  Quality with affordability ensured
                </p>
              </div>
              <div className="bg-rose-50 justify-center text-center  py-20 px-8  rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
                <Image src="/Group clock.png" width={18} height={18} />
                <p className="font-medium "> CUSTOMER SUPPORT</p>
                <p className="text-gray-600 w-28 mx-auto">
                  Call us anytime: 111-111-1111
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-20">
          <h3 className="text-gray-800 font-semibold text-4xl ">
            New Arrivals
          </h3>
          <div className="flex pt-16 pb-8">
            <div className="px-8">
              <Image
                src="/Rectangle 7.png"
                width={296}
                height={346}
                className="rounded-xl"
              />
              <div className="flex justify-between">
                <p className="font-medium text-gray-600">Sofa</p>
                <p className="text-gray-800 font-medium text-xl">$220</p>
              </div>
            </div>
            <div>
              <Image
                src="/Rectangle 8.png"
                width={296}
                height={346}
                className="rounded-xl"
              />
              <div className="flex justify-between">
                <p className="font-medium text-gray-600">Lamp</p>
                <p className="text-gray-800 font-medium text-xl">$90</p>
              </div>
            </div>
            <div className="px-8">
              <Image
                src="/Rectangle 9.png"
                width={296}
                height={346}
                className="rounded-xl"
              />
              <div className="flex justify-between">
                <p className="font-medium text-gray-600">Dining Table</p>
                <p className="text-gray-800 font-medium text-xl">$250</p>
              </div>
            </div>
            <div className="px-8">
              <Image
                src="/Rectangle 15.png"
                width={296}
                height={346}
                className="rounded-xl"
              />
              <div className="flex justify-between">
                <p className="font-medium text-gray-600">Office Chair</p>
                <p className="text-gray-800 font-medium text-xl">$320</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-20">
          <div className="mt-28 pl-28 mr-24 xl:w-6/12 2xl:w-full ">
            <p className="font-semibold text-3xl text-gray-800 pr-4  font-['Poppins']">
              Dining Chair Rocco in Bottle Green Velvet
            </p>
            <button className="py-5 mt-12 px-8 bg-gray-800 text-white font-medium rounded-md">
              Explore
            </button>
          </div>
          <div className="xl:w-6/12 2xl:w-full ">
            <Image
              src="/Group 307.png"
              width={448}
              height={446}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="px-20">
          <p className="font-semibold  pb-16 text-3xl text-gray-800 pr-4  font-['Poppins']">
            40% off Products
          </p>
          <div className="grid grid-cols-3">
            <div>
              <div className=" px-10 bg-yellow-50 relative">
                <div>
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl relative"
                  />
                  <p className="text-xl font-medium absolute top-8 left-16">
                    Beds
                  </p>
                </div>
                <Image
                  src="/Rectangle 18.png"
                  width={325}
                  height={642}
                  className="rounded-xl"
                />
              </div>
              <Image
                src="/Rectangle 30.png"
                width={325}
                height={237}
                className="rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/Rectangle 23.png"
                width={326}
                height={237}
                className="rounded-xl"
              />
              <Image
                src="/Rectangle 32.png"
                width={326}
                height={642}
                className="rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/Rectangle 31.png"
                width={325}
                height={642}
                className="rounded-xl"
              />
              <Image
                src="/Rectangle 33.png"
                width={325}
                height={237}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <P>hello</P>
      </div>
    </>
  );
}
