import initialContracts from "./InvoiceList";
import * as Tabs from "@radix-ui/react-tabs";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReadContract } from "wagmi";
import abi from "../../config/abi";
import { useAccount } from "wagmi";
import { formatEther } from "viem";
import { isEmpty } from "lodash";
import Spinner from "../../components/spinner/Spinner";

const Multiparty = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContractIndex, setSelectedContractIndex] = useState(null);
  const [contracts, setContracts] = useState(initialContracts);
  const [depositAmount, setDepositAmount] = useState("");
  const [invoiceList, setInvoiceList] = useState([]);

  const handleAccept = (index) => {
    setSelectedContractIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDepositAmount("");
  };

  const handleDeposit = (e) => {
    e.preventDefault();
    const updatedContracts = [...contracts];
    updatedContracts[selectedContractIndex].isDepositMade = true; // Mark deposit as made
    setContracts(updatedContracts);
    handleCloseModal();
  };

  const handleConfirmDelivery = (index) => {
    console.log(`Delivery confirmed for ${contracts[index].title}`);
    // Add logic to interact with the smart contract to finalize the process
  };

  const contractAddress = "0x0F0AFE3d86B1C3f93C62C39B0dA5CE2d109BfBE7";
  const account = useAccount();

  const {
    data: asyncInvoiceList,
    isLoading,
    error,
    isSuccess,
  } = useReadContract({
    abi: abi,
    address: contractAddress,
    functionName: "generateAllInvoice",
    account: account.address,
  });
  console.log("asyncInvoiceList::", asyncInvoiceList);

  useEffect(() => {
    if (isSuccess) {
      setInvoiceList(asyncInvoiceList);
      console.log("result-multi-party::", invoiceList);
    }
  }, [asyncInvoiceList]);

  //   the tabs are mixed up, created invoices are the one showing the accept and reject button, when those buttons are for the invoices created for you

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Tabs.Root defaultValue="tab1" className="py-14 " orientation="vertical">
        <Tabs.List
          aria-label="tabs"
          className="font-semibold bg-gradient-to-r to-[#568ce2] from-[#1f3a63] p-4 mb-7 text-gray-800 flex gap-4"
        >
          <Tabs.Trigger
            className="TabsTrigger shadow-lg rounded-md text-base"
            value="tab1"
          >
            Created Invoice{" "}
          </Tabs.Trigger>
          <Tabs.Trigger
            className="TabsTrigger shadow-lg rounded-md text-base"
            value="tab2"
          >
            Invoice Created For You
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isEmpty(invoiceList) ? (
              <div className="w-full text-center col-span-3 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  No Invoices Found
                </h3>
                <p className="text-sm text-gray-500">
                  There are no invoices to display at the moment.
                </p>
              </div>
            ) : (
              invoiceList.map((invoice, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{`Invoice Title`}</h3>
                  <p className="text-sm overflow-hidden text-ellipsis text-gray-500">
                    Parties{invoice.clientAddress}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Total Value: {formatEther(invoice.amount)} USDT
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {invoice.deadline}
                    {/* convert this to a readable date from utils */}
                  </p>
                  <span
                    className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${
                      invoice.hasAccepted
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {invoice.hasAccepted ? "In Progress" : "Pending"}
                  </span>
                </div>
              ))
            )}
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{contracts.map((contract, index) => (
							<div
								key={index}
								className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
							>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">
									{contract.title}
								</h3>
								<p className="text-sm text-gray-500">
									{contract.parties} Parties
								</p>
								<p className="text-sm text-gray-500 mb-4">
									Total Value: {contract.totalValue}
								</p>
								<span
									className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${contract.statusColor}`}
								>
									{contract.status}
								</span>

								<div className="mt-4 flex space-x-4">
									{contract.isDepositMade ? (
										<button
											className="bg-[#1f3a63] hover:bg-blue-600 text-white px-4 py-2 rounded"
											onClick={() => handleConfirmDelivery(index)}
										>
											Confirm Delivery
										</button>
									) : (
										<>
											<div className="flex justify-between w-full">
												<button
													className="bg-[#325995] hover:bg-blue-600 text-white px-3 py-1 rounded"
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
										Deposit Funds for {contracts[selectedContractIndex]?.title}
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
					</div> */}
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};

export default Multiparty;
