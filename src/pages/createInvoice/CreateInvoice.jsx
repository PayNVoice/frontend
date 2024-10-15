import { useState } from "react";
import { useAccount } from "wagmi";


const CreateInvoice = () => {
  const account = useAccount();
  
  return (
    <div className="h-full w-full flex justify-center items-center pt-5">
      <div className="w-full md:w-[1152px] p-5 border border-[#E2E8F0] rounded-lg bg-[#FFFFFF]">
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <p className="font-bold">Client Information</p>
          <div className="w-full md:w-[700px] flex flex-col gap-5">
            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Client Wallet Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="0x000000000...."
                required
              />
            </div>

            <div className="flex items-center justify-between gap-5">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Invoice Amount
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="0.001"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Currency
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="ETH"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-5">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="email"
                  className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="ETH"
                  required
                />
              </div>

              <div className="w-full"></div>
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Payment Terms
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Additional Conditions
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div className="w-full flex items-center justify-end">
              <button
                type="button"
                className="text-white outline-none bg-gradient-to-b to-[#568ce2] from-[#1f3a63] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Deploy Contract
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
