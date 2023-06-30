import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Data } from "./data";

type Iprops = {
  handleClickGift: () => void;
  isGift: boolean;
};

export const Carousel: React.FC<Iprops> = ({ handleClickGift, isGift }) => {
  const [data, setData] = useState<any>("");
  const [tap, setTap] = useState<number>(0);
  const onChangeTranslate = (name: string) => {
    const findIndex = data.findIndex(
      (e: any, index: number) => e.name === name
    );
    const dataTranslate = data.toSpliced(findIndex, 1, {
      name: data[findIndex].name,
      translate: data[findIndex].translate,
      isTranslate: true,
      before1: data[findIndex].before1,
      before2: data[findIndex].before2,
      before3: data[findIndex].before3,
      after1: data[findIndex].after1,
      after2: data[findIndex].after2,
      after3: data[findIndex].after3,
      image: data[findIndex].image,
    });
    setData(dataTranslate);
  };

  const onChangeTranslateFalse = (name: string) => {
    const findIndex = data.findIndex((e: any) => e.name === name);
    const dataTranslate = data.toSpliced(findIndex, 1, {
      name: data[findIndex].name,
      translate: data[findIndex].translate,
      isTranslate: false,
      before1: data[findIndex].before1,
      before2: data[findIndex].before2,
      before3: data[findIndex].before3,
      after1: data[findIndex].after1,
      after2: data[findIndex].after2,
      after3: data[findIndex].after3,
      image: data[findIndex].image,
    });
    setData(dataTranslate);
  };
  useEffect(() => {
    setData(Data);
  }, []);
  return (
    <div className="container m-auto flex justify-between items-center rounded overflow-hidden shadow-lg">
      <div>
        <div className="font-hand text-2xl text-center">List of Wish </div>
        <div className="w-64 carousel rounded-box">
          {data !== "" &&
            data.map((e: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className="carousel-item w-full grid overflow-auto"
                >
                  <div>
                    <Image
                      src={e.image}
                      className="w-full"
                      width={100}
                      height={100}
                      alt="Tailwind CSS Carousel component"
                    />
                  </div>
                  <div className="max-w-sm bg-moa rounded-b shadow-lg block">
                    <div className="flex justify-center">
                      <span className="inline-flex justify-center items-center px-1 py-1 font-extrabold ">
                        {e.name}
                      </span>
                    </div>
                    {e.translate === true && e.isTranslate === false ? (
                      <div className="block px-3 text-center ">
                        {e.before1} <br /> {e.before2} <br /> {e.before3}
                      </div>
                    ) : e.translate === true && e.isTranslate === true ? (
                      <div className="block px-3 text-center">
                        {e.after1} <br /> {e.after2} <br /> {e.after3}
                      </div>
                    ) : (
                      <div className="block px-3 text-center mt-1">
                        {e.after}
                      </div>
                    )}
                    <div className="flex justify-end">
                      {e.translate === true && e.isTranslate === false ? (
                        <button
                          type="button"
                          className={`inline-flex justify-center items-center px-1 py-1 ml-3 text-kecil md:text-sm font-medium text-white bg-dia border border-transparent rounded-md shadow-sm hover:bg-aku`}
                          onClick={() => onChangeTranslate(e.name)}
                        >
                          translate
                        </button>
                      ) : e.translate === true && e.isTranslate === true ? (
                        <button
                          type="button"
                          className={`inline-flex justify-center items-center px-1 py-1 ml-3 text-kecil md:text-sm font-medium text-white bg-dia border border-transparent rounded-md shadow-sm hover:bg-aku`}
                          onClick={() => onChangeTranslateFalse(e.name)}
                        >
                          back
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <div className="font-hand text-2xl text-center">
          {tap < 3
            ? "Tap 3 times on this cake to turn off the candle"
            : "Happy Birthdayyy!!!!"}{" "}
        </div>
        {tap < 3 ? (
          <div onClick={() => setTap(tap + 1)}>
            <Image src={"/nyala.png"} alt="nyala" width={500} height={500} />
          </div>
        ) : (
          <div>
            <Image src={"/mati.png"} alt="mati" width={500} height={500} />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 gap-48 mr-10">
        <div className="font-hand text-2xl text-start">
          {tap < 3
            ? "Cannot open the gift, please turn off the candle!"
            : "Now you can open the gift, good luck!"}{" "}
        </div>
        {isGift ? (
          <div
            className="flex justify-center"
            onClick={tap < 3 ? () => {} : handleClickGift}
          >
            <Image src={"/gift-box.png"} alt="nyala" width={100} height={100} />
          </div>
        ) : (
          <div className="flex justify-center">
            <Image src={"/gift.png"} alt="nyala" width={100} height={100} />
          </div>
        )}
      </div>
    </div>
  );
};
