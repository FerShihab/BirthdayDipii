import React, { Fragment, useCallback, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import { Input } from "./input";
import { BubbleChat } from "./bubbleChat";

type EmployeeCountProps = {
  isModalOpen: boolean;
  onCloseModal: () => void;
};

type Iprops = {
  name: string;
};

const Modal = (props: EmployeeCountProps) => {
  const { isModalOpen, onCloseModal } = props;

  const [isSendDisable, setIsSendDisable] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [isResetDisable, setIsResetDisable] = useState<boolean>(true);
  const [failName, setFailName] = useState<boolean>(false);
  const [failBirthday, setFailBirthday] = useState<boolean>(false);
  const [failFavourite, setFailFavourite] = useState<boolean>(false);
  const [isName, setIsName] = useState<string>("");
  const [isNameTemp, setIsNameTemp] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [birthdayTemp, setBirthdayTemp] = useState<string>("");
  const [favouriteDrinks, setFavouriteDrinks] = useState<string>("");
  const [disabledRadio, setDisabledRadio] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingBirthday, setLoadingBirthday] = useState<boolean>(false);
  const [loadingFavourite, setLoadingFavourite] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleSend = () => {
    setLoading(true);
    setIsNameTemp("");
    setIsName(isNameTemp);
    setTimeout(() => {
      setLoading(false);
      if (isNameTemp !== "Diva Aulia Rizqina Putri") {
        setFailName(true);
        setIsResetDisable(false);
        setIsSendDisable(true);
        setIsDisable(true);
      }
    }, 1000);
  };

  const handleSendBirthday = () => {
    setBirthday(birthdayTemp);
    setBirthdayTemp("");
    setIsDisable(true);
    setIsSendDisable(true);
    setLoadingBirthday(true);
    setIsResetDisable(true);
    setTimeout(() => {
      setLoadingBirthday(false);
      if (birthdayTemp != "01-07-2005") {
        setFailBirthday(true);
        setIsResetDisable(false);
        setIsSendDisable(true);
        setIsDisable(true);
      }
    }, 1000);
  };

  const reset = () => {
    setIsName("");
    setIsNameTemp("");
    setBirthday("");
    setBirthdayTemp("");
    setFavouriteDrinks("");
    setFailName(false);
    setFailBirthday(false);
    setIsSendDisable(false);
    setIsResetDisable(true);
    setIsDisable(false);
    setDisabledRadio(false);
    setFailFavourite(false);
    setIsFinished(false);
    setDisabledRadio(false);
  };

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto bg-slay"
        onClose={onCloseModal}
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative inline-block sm:w-full md:w-1/2 max-w-4xl p-4 overflow-hidden text-left align-middle bg-white shadow-xl dark:bg-gray-700 dark:text-white transition-all transform rounded-2xl space-y-4">
              <BubbleChat
                direction="left"
                question="Knock knock, who&#39;s there?"
                fail={false}
                name
                handleChange={() => {}}
              />
              {isName !== "" && (
                <div>
                  <BubbleChat
                    direction="right"
                    answer={isName}
                    margin="-mt-10"
                    handleChange={() => {}}
                  />
                </div>
              )}
              {loading && <div className="dot-elastic"></div>}
              {!loading && isName !== "" && (
                <BubbleChat
                  direction="left"
                  question={
                    isName === "Diva Aulia Rizqina Putri"
                      ? "Awesome! and how about your birthday? when is it?"
                      : ""
                  }
                  fail={failName}
                  birthday
                  margin="-mt-10"
                  handleChange={() => {}}
                />
              )}
              {birthday !== "" && (
                <BubbleChat
                  direction="right"
                  answer={birthday}
                  margin="-mt-10"
                  handleChange={() => {}}
                />
              )}
              {loadingBirthday && <div className="dot-elastic"></div>}
              {!loadingBirthday && birthday !== "" && (
                <BubbleChat
                  direction="left"
                  question={
                    birthday == "01-07-2005"
                      ? "Marvelous! your answer is correct. Last I want know what is your favourite drink?"
                      : ""
                  }
                  fail={failBirthday}
                  margin="-mt-10"
                  handleChange={() => {}}
                />
              )}
              {!loadingBirthday && birthday == "01-07-2005" && (
                <BubbleChat
                  direction="right"
                  margin="-mt-10"
                  radio
                  disabledRadio={disabledRadio}
                  handleChange={(val) => {
                    setFavouriteDrinks(val);
                    setLoadingFavourite(true);
                    setDisabledRadio(true);
                    setIsResetDisable(true);
                    if (val === "Teh Poci Milo") {
                      setTimeout(() => {
                        setLoadingFavourite(false);
                        setIsFinished(true);
                      }, 1000);
                    } else {
                      setTimeout(() => {
                        setLoadingFavourite(false);
                        setDisabledRadio(true);
                        setIsResetDisable(false);
                        setIsSendDisable(true);
                        setIsDisable(true);
                        setFailFavourite(true);
                      }, 1000);
                    }
                  }}
                />
              )}
              {loadingFavourite && <div className="dot-elastic"></div>}

              {!loadingFavourite && favouriteDrinks !== "" && (
                <BubbleChat
                  direction="left"
                  margin="-mt-10"
                  handleChange={() => {}}
                  fail={failFavourite}
                  question="Congratulation, I know it is you Diva. Click button down bellow to continue your journey"
                />
              )}

              {!isFinished ? (
                <div className="mt-5 text-right flex">
                  <Input
                    disabled={isDisable}
                    value={
                      isNameTemp !== "" && isName === ""
                        ? isNameTemp
                        : birthdayTemp
                    }
                    onChangeInput={(val: any) => {
                      if (isName === "") {
                        setIsNameTemp(val);
                      } else {
                        setBirthdayTemp(val);
                      }
                    }}
                    // placeholder={isName === '' ? 'full name with format Title Case' : 'input birth date with format dd-mm-yyyy'}
                    id="name"
                    name="name"
                    type={"text"}
                  />
                  <button
                    type="button"
                    disabled={isResetDisable}
                    className={`inline-flex justify-center items-center px-2 lg:px-8 lg:py-2 text-kecil sm:text-sm font-medium text-gray-500  ${
                      isResetDisable ? "bg-gray-300" : "bg-white"
                    } ${
                      isResetDisable ? "" : "border-orange-500"
                    } border rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-700 ${
                      isResetDisable ? "" : "hover:bg-gray-200"
                    }`}
                    onClick={() => {
                      reset();
                    }}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    disabled={isSendDisable}
                    onClick={() =>
                      isName === "" && isNameTemp !== ""
                        ? handleSend()
                        : handleSendBirthday()
                    }
                    className={`inline-flex justify-center items-center px-2 lg:px-8 lg:py-2 ml-3 text-kecil md:text-sm font-medium text-white ${
                      isSendDisable ? "bg-gray-300" : "bg-orange-500"
                    } border border-transparent rounded-md shadow-sm ${
                      isSendDisable ? "" : "hover:bg-orange-600"
                    }`}
                  >
                    Send
                  </button>
                </div>
              ) : (
                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="inline-flex justify-center px-8 py-2 ml-3 text-sm font-medium text-black bg-white border border-orange-600 rounded-md shadow-sm hover:bg-orange-600"
                  >
                    Go To Next Journey
                  </button>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
