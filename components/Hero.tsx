import React from 'react';
import userData from '@constants/data';
import Header from './Header';
import ProgressiveImage from 'react-progressive-image';
import Image from 'next/image';
export default function Hero() {
  return (
    <Header>
      <div className="flex flex-row items-start mx-auto md:justify-between">
        <div className=" lg:w-4/6 bmd:text-left">
          <h1 className={`font-bold leading-[1] text-[1em] m-0`}>
            Writer.
            <br />
            Developer.
            <br />
            <span className={`whitespace-nowrap`}>AI Engineer.</span>
            <br />
            Photographer.
          </h1>
        </div>
        {/* Image container */}
        <div className="relative hidden w-full sm:block sm:left-[1vw] sm:top-[calc(-1rem+5vw)] md:top-[4rem] bmd:left-[2vw] 2xl:w-2/6 2xl:left-[12rem]">
          <div className="w-full transform sm:scale-[0.9] bmd:scale-[1]">
            <ProgressiveImage
              src={userData.avatarUrl}
              placeholder={userData.avatarUrlSmall}
  
            >
              {(src) => (
                <Image
                  src={src}
                  alt="victor ughonu"
                  className="rounded-full shadow-lg bmd:rounded-none "
                  height="505"
                  width="495"
                />
              )}
            </ProgressiveImage>

            <div className="flex flex-row justify-between mt-[-5px] transform translate-x-10 bmd:transform-none">
              <div className="flex flex-row space-x-2 md:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-90deg-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                  />
                </svg>
                <p className="font-mono text-xs">That&apos;s me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}
