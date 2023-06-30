import React from "react";
import Image from "next/image";

export type InputType = {
  question?: string;
  answer?: string;
  fail?: boolean;
  direction?: string;
  margin?: string;
  radio?: boolean;
  disabledRadio?: boolean;
  name?: boolean;
  birthday?: boolean;
  handleChange: (_val: any) => void;
};
export const BubbleChat: React.FC<InputType> = ({
  question,
  fail,
  direction,
  answer,
  margin,
  radio,
  disabledRadio,
  name,
  birthday,
  handleChange,
}) => {
  return (
    <div
      className={`flex ${direction === "right" ? "justify-end" : ""} ${margin}`}
    >
      {direction === "left" && !radio ? (
        <>
          <Image
            src={!fail ? "/goodCat.png" : "/blabla.png"}
            alt="cat"
            width={100}
            height={100}
            className="mt-5"
          />
          <div className="chat chat-start -ml-5 mt-5 w-full">
            {fail ? (
              <div className="chat-bubble bg-orange-500 text-white text-sm">
                {" "}
                Game Over !<br /> Click reset button bellow!
              </div>
            ) : !fail && name ? (
              <div className="chat-bubble bg-orange-500 text-white text-sm">
                {question} <br /> <b>Clue : </b>your full name and use title
                case
              </div>
            ) : !fail && birthday ? (
              <div className="chat-bubble bg-orange-500 text-white text-sm">
                {question} <br /> <b>Clue : </b> Use number with format
                dd-mm-yyyy{" "}
              </div>
            ) : (
              <div className="chat-bubble bg-orange-500 text-white text-sm">
                {question}
              </div>
            )}
          </div>
        </>
      ) : !radio ? (
        <>
          <div className="chat chat-end -ml-5 w-full">
            <div className="chat-bubble bg-orange-500 text-white text-sm">
              {" "}
              {answer}
            </div>
          </div>
          <Image
            src={"/profile.png"}
            alt="cat"
            width={50}
            height={10}
            className="mt-5"
          />
        </>
      ) : (
        <>
          <div className="chat chat-end -ml-5 w-full -mt-3">
            <div className="chat-bubble bg-orange-500 text-white text-sm">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -mr-3 -ml-[1.5rem] mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:bg-orange-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="flexRadioDefault"
                  value={"Teh Poci Milo"}
                  id="radioDefault01"
                  onChange={(e) => handleChange(e.target.value)}
                  disabled={disabledRadio}
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] text-kecil hover:cursor-pointer"
                  htmlFor="radioDefault01"
                >
                  A. Teh Poci Milo
                </label>
              </div>
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -mr-3 -ml-[1.5rem] mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:bg-orange-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault02"
                  value={"Jeruk Nipis Jatijajar"}
                  onChange={(e) => handleChange(e.target.value)}
                  disabled={disabledRadio}
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] text-kecil hover:cursor-pointer"
                  htmlFor="radioDefault02"
                >
                  B. Jeruk Nipis Jatijajar
                </label>
              </div>
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -mr-3 -ml-[1.5rem] mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-white checked:after:bg-white checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-white checked:bg-orange-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-white dark:checked:after:border-white dark:checked:after:bg-white dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-white dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault02"
                  value={"Mochaccino"}
                  onChange={(e) => handleChange(e.target.value)}
                  disabled={disabledRadio}
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] text-kecil hover:cursor-pointer"
                  htmlFor="radioDefault02"
                >
                  C. Mochaccino
                </label>
              </div>
            </div>
            <Image
              src={"/profile.png"}
              alt="cat"
              width={50}
              height={10}
              className="mt-5"
            />
          </div>
        </>
      )}
    </div>
  );
};
