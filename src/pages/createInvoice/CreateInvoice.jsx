import { useState } from "react";
import { useWriteContract } from "wagmi";
import { toast } from "react-toastify";
import { Contract_ABI } from "../../ABI/abi";
import { parseEther } from "viem";

const CreateInvoice = () => {
  const [customerAddress, setCustomerAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [additionalConditions, setAdditionalConditions] = useState('');
  // const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const contractAddress = "0x5C287a2819bF1B82A852de9a69f83c9ef294BEca"

  const createInvoice = async () => {
    try {
      // Convert amount to wei (1 ether = 10^18 wei)
      const amountInWei = parseEther(amount);

      // Convert date to Unix timestamp
      const dueDateTimestamp = Math.floor(new Date(date).getTime() / 1000);

      await writeContractAsync({
        address: contractAddress,
        abi: Contract_ABI,
        functionName: "createInvoice",
        args: [
          customerAddress,
          amountInWei,
          dueDateTimestamp,
          paymentTerm,
          additionalConditions
         
        ],
      });
      
      toast.success("Invoice Created Successfully");
    } catch (err) {
      console.error("Error creating invoice:", err);
      toast.error("Error creating invoice: " + err.message);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center pt-5">
      <div className="w-full md:w-[1152px] p-5 border border-[#E2E8F0] rounded-lg bg-[#FFFFFF]">
        <div className="w-full flex justify-center items-center flex-col gap-4">
          <p className="font-bold">Client Information</p>
          <div className="w-full md:w-[700px] flex flex-col gap-5">
            <div>
              <label htmlFor="customerAddress" className="block mb-2 text-sm font-medium text-gray-900">
                Client Wallet Address
              </label>
              <input
                type="text"
                id="customerAddress"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="0x000000000...."
                required
              />
            </div>

            <div className="flex items-center justify-between gap-5">
              <div className="w-full">
                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">
                  Invoice Amount (ETH)
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="0.001"
                  step="0.000000000000000001"
                  required
                />
              </div>

              <div className="w-full">
                <label htmlFor="currency" className="block mb-2 text-sm font-medium text-gray-900">
                  Currency
                </label>
                <input
                  type="text"
                  id="currency"
                  value="LSK"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  // disabled
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-5">
              <div className="w-full">
                <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900">
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              <div className="w-full"></div>
            </div>

            <div className="w-full">
              <label htmlFor="paymentTerms" className="block mb-2 text-sm font-medium text-gray-900">
                Payment Terms
              </label>
              <textarea
                id="paymentTerms"
                rows="4"
                value={paymentTerm}
                onChange={(e) => setPaymentTerm(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter payment terms..."
              ></textarea>
            </div>

            <div className="w-full">
              <label htmlFor="additionalConditions" className="block mb-2 text-sm font-medium text-gray-900">
                Additional Conditions
              </label>
              <textarea
                id="additionalConditions"
                rows="4"
                value={additionalConditions}
                onChange={(e) => setAdditionalConditions(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter additional conditions..."
              ></textarea>
            </div>

            <div className="w-full flex items-center justify-end">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={createInvoice}
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