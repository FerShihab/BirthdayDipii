import React from "react";
import Image from "next/image";

export const Title: React.FC<any> = ({}) => {
  return (
    <div className=" w-full grid justify-items-center items-center ">
      <div className="flex">
        <span className="font-hand text-7xl mt-4">
          This is your special day{" "}
        </span>
        <div>
          <Image
            src="/confetti.png"
            alt="confetti"
            className="mt-4 ml-3"
            width={50}
            height={10}
          />
        </div>
      </div>
      <div className="flex -mt-4">
        <span className="font-fat text-8xl mt-4"> Happy </span>
        <div className="-ml-3">
          <Image
            src="/akar.png"
            alt="confetti"
            className="mt-4 ml-3"
            width={250}
            height={300}
          />
        </div>
        <span className="font-fat text-8xl mt-4 ml-3"> y.o </span>
      </div>
    </div>
  );
};
