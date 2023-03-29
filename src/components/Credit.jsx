import React from "react";

const Credit = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-center md:items-center bg-[#4e4c4c] p-1 z-10">
      <div className="flex justify-center items-center">
        <p className="text-white">Free template by</p>
        <a
          href="https://www.kodenow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center">
            <img
              className="ml-2 mr-1"
              src="/logoSymbol.png"
              alt="kodenowLogo"
              width="30"
              height="30"
            />
            <img
              className="mr-3"
              src="/KodeNowLogo.png"
              alt="kodenowLogo"
              width="126"
              height="20"
            />
          </div>
        </a>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-white text-[20px] mr-2 hidden md:block">|</h1>
        <p className="text-white">Get code here</p>
        <a
          href="https://github.com/kodenow/metaverse-nextjs-tailwind"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="-ml-2"
            src="/github.png"
            alt="kodenowLogo"
            width="135"
            height="50"
          />
        </a>
      </div>
    </section>
  );
};

export default Credit;
