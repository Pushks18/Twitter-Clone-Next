import Image from "next/image";
import React from "react";

const TrendingList = () => {
  return (
    <div className="mt-4 flex items-center">
      <div className="items-center">
        <p className="text-gray-500 text-[14px] mb-1">DevOps · Trending</p>
        <h1 className="font-medium pr-2">#CloudComputing</h1>
      </div>
      {/* 
      <div className="items-center">
        <p className="text-gray-500 text-[14px] mb-1">Finance . Trending</p>
        <h1 className="font-medium pr-2">#DalalStreet</h1>
      </div>
      <div className="items-center">
        <p className="text-gray-500 text-[14px] mb-1">Mystery . Trending</p>
        <h1 className="font-medium pr-2">#ChroniclesOfTheDead</h1>
      </div>
      <div className="items-center">
        <p className="text-gray-500 text-[14px] mb-1">
          Web Development . Trending
        </p>
        <h1 className="font-medium pr-2">#TwitterClone</h1>
      </div>
      <div className="items-center">
        <p className="text-gray-500 text-[14px] mb-1">Open Source . Trending</p>
        <h1 className="font-medium pr-2">#GitwayToOpenSource</h1>
      </div> */}

      <div>
        <Image className="rounded-[20px]" src="" height="120px" width="120px" />
      </div>
    </div>
  );
};

export default TrendingList;
