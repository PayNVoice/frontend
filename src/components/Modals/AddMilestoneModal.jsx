import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { parseEther } from "viem";
import { useWriteContract } from 'wagmi';
import abi from "../../config/abi"

const AddMilestoneModal = ({ handleMileCloseModal,invoices,selectedInvoiceIndex, onAddMilestone }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const {writeContractAsync} = useWriteContract();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert amount to wei (1 ether = 10^18 wei)
      const amountInWei = parseEther(amount);

      // Convert date to Unix timestamp
      const dueDateTimestamp = Math.floor(new Date(deadline).getTime() / 1000);
      const contractAddress = "0x0F0AFE3d86B1C3f93C62C39B0dA5CE2d109BfBE7";
     
      
      const tx = await writeContractAsync({
        address: contractAddress,
        abi: abi,
        functionName: "addMilestone",
        args: [
          invoices[selectedInvoiceIndex],
          description,
          amountInWei,
          dueDateTimestamp,     
        ],
      });
      onAddMilestone(tx); 
    toast.success("Milestone Created Successfully");
    handleMileCloseModal();
    } catch (err) {
      console.error("Error creating Milestone:", err);
      toast.error("Error creating Milestone: " + err.message);
    }
   
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add Milestone {}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              className="w-full outline-none border border-gray-300 rounded px-3 py-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              className="w-full outline-none border border-gray-300 rounded px-3 py-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deadline
            </label>
            <input
              type="date"
              className="w-full outline-none border border-gray-300 rounded px-3 py-2"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              onClick={handleMileCloseModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Milestone
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddMilestoneModal;
