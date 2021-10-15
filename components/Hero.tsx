import React from 'react';
import userData from '@constants/data';
import Header from './Header';

export default function Hero() {
  return (
    <Header>
      <div className="flex flex-row items-start max-w-6xl mx-auto overflow-hidden md:justify-between">
        <div className="w-1/2  md:w-3/5 md:text-left lg:p-10">
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
        <div className="relative hidden w-full mt-20 lg:block md:w-2/5">
          <div className="w-[90%]">
            <img
              src={userData.avatarUrl}
              alt="victor ughonu"
              className="shadow "
            />
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-row space-x-4">
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
