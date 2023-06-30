import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

export type Iprops = {
  id: number;
  name: string;
  image: string;
};

export type IProps = {
  isModalOpen: boolean;
  isLoading: boolean;
  onCloseModal: () => void;
  data: Iprops | undefined;
};

const ModalGift = (props: IProps) => {
  const { isModalOpen, isLoading, onCloseModal, data } = props;

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-900/25" />
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
            <div className="relative inline-block w-lg max-w-4xl p-4 overflow-hidden text-left align-middle bg-white shadow-xl dark:bg-gray-700 dark:text-white transition-all transform rounded-2xl space-y-4">
              {isLoading ? (
                <div className="dot-elastic2"></div>
              ) : (
                <div className="font-hand font-bold text-5xl text-center">
                  {data?.id !== 3
                    ? `Congratulation your gift is ${data?.name}`
                    : "Unfortunately you just get a bunch of trash"}
                </div>
              )}
              <div className="flex justify-center">
                <Image
                  src={`${data?.image}`}
                  alt="hadiah"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-center">
                don&#39;t forget to capture this and share to the author. Thank
                You...
              </div>
              <div className="mt-5 text-right">
                <button
                  type="button"
                  className="inline-flex justify-center px-8 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-700 hover:bg-gray-200"
                  onClick={onCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalGift;
