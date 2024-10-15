import React from 'react'
import { useState } from 'react';
import invoicesarray from "./details";
import * as Tabs from "@radix-ui/react-tabs";

const Invoices = ({
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedInvoiceIndex, setSelectedInvoiceIndex] = useState(null);
	const [invoices, setInvoices] = useState(invoicesarray);
    const [depositAmount, setDepositAmount] = useState("");

    const handleAccept = (index) => {
		setSelectedInvoiceIndex(index);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setDepositAmount("");
	};

	const handleDeposit = (e) => {
		e.preventDefault();
		const updatedContracts = [...contracts];
		updatedContracts[selectedInvoiceIndex].isDepositMade = true; // Mark deposit as made
		setInvoices(updatedContracts);
		handleCloseModal();
	};

	// const handleConfirmDelivery = (index) => {
	// 	console.log(`Delivery confirmed for ${invoices[index].title}`);
	// 	// Add logic to interact with the smart contract to finalize the process
	// };
    return (

        <>
    <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-6">
        {invoices.map((invoice, index) => (
            <div
                key={index}
                className="bg-white col-span-2 border space-y-3 border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
            >
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
                    Invoice Preview
                </h3>
                <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-lg text-black'>Client Address:</strong> {invoice.clientAddress}
                    </p>
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-lg text-black'>Amount:</strong> {invoice.amount} {invoice.currency}
                    </p>
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-lg text-black'>Due Date:</strong> {new Date(invoice.dueDate).toLocaleDateString()}
                    </p>
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-lg text-black'>Payment Terms:</strong> {invoice.paymentTerms}
                    </p>
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-lg text-black'>Additional Conditions:</strong> {invoice.additionalConditions}
                    </p>
                {/* <span
                    className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${contract.statusColor}`}
                >
                    {contract.status}
                </span> */}
                <h3 className="text-lg font-semibold mt-4">Milestones</h3>
                    {invoice.milestones.length > 0 ? (
                    <ul className="list-disc text-gray-600 text-sm ml-5">
                        {invoice.milestones.map((milestone, index) => (
                        <li key={index}>
                            {milestone.description} - {milestone.amount} ETH -{" "}
                            <em>{milestone.status}</em>
                        </li>
                        ))}
                    </ul>
                    ) : (
                    <p>No milestones added yet.</p>
                    )}
  

                <div className="mt-4 flex space-x-4">
                    {invoice.isDepositMade ? (
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            // onClick={() => handleConfirmDelivery(index)}
                        >
                            Confirm Delivery
                        </button>
                    ) : (
                        <>
                            <div className="flex justify-between w-full">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                    onClick={() => handleAccept(index)}
                                >
                                    Accept
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                                    Reject
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        ))}

        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-4">
                        Deposit Funds
                    </h2>
                    <form onSubmit={handleDeposit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Deposit Amount
                            </label>
                            <input
                                type="number"
                                className="w-full outline-none border border-gray-300 rounded px-3 py-2"
                                value={depositAmount}
                                onChange={(e) => setDepositAmount(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Deposit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
</>
    );
  };

export default Invoices