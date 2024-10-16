import { useState,useEffect } from "react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { useWriteContract,useWaitForTransactionReceipt } from "wagmi";
import { ToastContainer, toast } from "react-toastify";
import { parseEther } from "viem";
import abi from "../../config/abi"



const CreateInvoice = () => {

  const [customerAddress, setCustomerAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [paymentTerm, setPaymentTerm] = useState('');
  const [additionalConditions, setAdditionalConditions] = useState('');
  const [currency, setCurrency] = useState('');
  const [txHash, setTxHash] = useState(null);
  

  const {writeContractAsync,isPending} = useWriteContract();

  const account = useAccount();
  const navigate = useNavigate();


  const contractAddress = "0x0F0AFE3d86B1C3f93C62C39B0dA5CE2d109BfBE7";


  const handleCreateInvoice = async () => {
    try {
      // Convert amount to wei (1 ether = 10^18 wei)
      const amountInWei = parseEther(amount);

      // Convert date to Unix timestamp
      const dueDateTimestamp = Math.floor(new Date(date).getTime() / 1000);

      const tx = await writeContractAsync({
        address: contractAddress,
        abi: abi,
        functionName: "createInvoice",
        args: [
          customerAddress,
          amountInWei,
          dueDateTimestamp,
          paymentTerm,
          additionalConditions      
        ]
      });

      console.log("tx::",tx);
      setTxHash(tx); 
      toast.info("Transaction submitted. Waiting for confirmation...")    
    } catch (err) {
      console.error("Error creating invoice:", err);
      toast.error("Error creating invoice: " + err.message);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({
    hash: txHash,
  });

  useEffect(() => {
    if (isConfirmed) {
      toast.success("Invoice Created Successfully");
      navigate("/invoice/invoices");
    }
  }, [isConfirmed]);

  return (
    <div className="h-full w-full flex justify-center items-center pt-5">
      <ToastContainer />
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
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}  
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
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Currency
                </label>
                <select
                  id="currency"
                  className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  required
                  >
                  <option value="USDT">USDT</option>
                  <option value="USDC">USDC</option>
                  <option value="LSK">LSK</option>
                </select>
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                value={paymentTerm}
                onChange={(e) => setPaymentTerm(e.target.value)}
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
                value={additionalConditions}
                onChange={(e) => setAdditionalConditions(e.target.value)}
              ></textarea>
            </div>

            <div className="w-full flex items-center justify-end">
              <button
                type="button"
                onClick={handleCreateInvoice}
                disabled={isPending}
                className="text-white outline-none bg-gradient-to-b to-[#568ce2] from-[#1f3a63] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {isPending ? "Creating Invoice..." : "Create Invoice"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
