import React from 'react'
import { useState, useEffect } from 'react';
import { useReadContract, useWriteContract } from 'wagmi'
import abi from '../../config/abi'
import { useAccount } from 'wagmi';
import { formatEther } from 'viem';
import AddMilestoneModal from '../../components/Modals/AddMilestoneModal';
import DepositModal from '../../components/Modals/DepositModal';
import { contractAddress } from '../../config/contractAddress';
import { toast } from 'react-toastify';
const Invoices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMileModalOpen, setIsMileModalOpen] = useState(false);
    const [selectedInvoiceIndex, setSelectedInvoiceIndex] = useState(null);
	const [invoices, setInvoices] = useState([]);
    const [depositAmount, setDepositAmount] = useState("");
    const {address} = useAccount();
    const [milestones, setMilestones] = useState([]);
    const {writeContractAsync} = useWriteContract();
  
   

    const handleAccept = (index) => {
		setSelectedInvoiceIndex(index);
		setIsModalOpen(true);
	};

    const handleMilestone = (index) => {
		setSelectedInvoiceIndex(index);
		setIsMileModalOpen(true);
        
	};
    const Mark = async(index )=>{
        await writeContractAsync({
            abi:abi,
            address: contractAddress,
            functionName: 'markMilestoneCompleted',
            account: address,
            args:[index]
          })
          toast.success("marked succesfull");

    }

    // const handleAddMilestone = (newMilestone) => {
    //     const result1 = useReadContract({
    //         abi:abi,
    //         address: contractAddress,
    //         functionName: 'getInvoicesForClient',
    //         account: address,
    //         args:['0x46A74e56ed132ed0142508160119Cf105b21820a']
    //       })
        
    //     setMilestones([...milestones, newMilestone]);
    //   };

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setDepositAmount("");
	};

    const handleMileCloseModal = () => {
		setIsMileModalOpen(false);
    
	};

  

	const handleDeposit = (e) => {
		e.preventDefault();
		const updatedContracts = [...contracts];
		updatedContracts[selectedInvoiceIndex].isDepositMade = true; // Mark deposit as made
		setInvoices(updatedContracts);
		handleCloseModal();
	};

   

    const {data:result, isSuccess, error} = useReadContract({
      abi:abi,
      address: contractAddress,
      functionName: 'generateAllInvoice',
      account: address,
    })

    const result1 = useReadContract({
        abi:abi,
        address: contractAddress,
        functionName: 'getInvoicesForClient',
        account: address,
        args:['0x46A74e56ed132ed0142508160119Cf105b21820a']
      })
    
    const DateConverter=(timestamp)=>{
        const date = new Date(Number(timestamp) * 1000)
       return date.toLocaleString()
    }
   

    useEffect(() => {
        if (isSuccess) {
            setInvoices(result1.data);
            console.log("helloworld",result1.data);
            console.log(invoices);
        }else{
            <p>Loading...</p>
        }
        if (error){

            console.log(error.message);
        }
           
    },[result])

	// const handleConfirmDelivery = (index) => {
	// 	console.log(`Delivery confirmed for ${invoices[index].title}`);
	// 	// Add logic to interact with the smart contract to finalize the process
	// };
    return (

        <>
    <div className="grid grid-cols-12 md:grid-cols-4 mt-5 gap-10">
        {invoices.map((invoice, index) => (
            <div
                key={index}
                className="bg-white col-span-2 border space-y-3 border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
            >
                <h3 className="text-lg uppercase font-semibold text-center text-gray-800 mb-2">
                    Invoice Preview
                </h3>
                <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-base text-gray-900'>Client Address:</strong> {invoice.clientAddress}
                    </p>
                    <div className=' grid grid-flow-col gap-8 item-center'>
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-base text-gray-900'>Amount:</strong> $ {formatEther(invoice.amount)}
                    </p>
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-base text-gray-900'>Due Date:</strong> {DateConverter(invoice.deadline)}
                    </p>
                    </div>
                    
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-base text-gray-900'>Payment Terms:</strong> {invoice.paymentterm}
                    </p>
                    <p className='flex flex-col text-gray-600 text-sm'>
                    <strong className='text-base text-gray-900'>Additional Conditions:</strong> {invoice.termsAndConditions}
                    </p>
                {/* <span
                    className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${contract.statusColor}`}
                >
                    {contract.status}
                </span> */}
                <h3 className="text-base font-semibold  text-gray-900 mt-4">Milestones</h3>
                    {invoice.milestones.length > 0 ? (
                    <ul className="list-disc text-gray-600 text-sm ml-5">
                        {invoice.milestones.map((milestone, index) => (
                        <li key={index} className='flex space-y-2 justify-between items-center'>
                            {milestone.description} - {formatEther(milestone.amount)} ETH -{" "}
                            <em className='bg-yellow-100 rounded-full p-1 px-3'>{milestone.status != 0? "Completed" : "Pending"}</em>
                            <button onClick={()=> Mark(index)} className='outline-none bg-blue-700 font-roboto font-semibold text-white rounded-md p-2 capitalize boreder-none'>mark as complete</button>
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
                            {address === invoice.clientAddress ?
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
                            </div> : 
                             <button
                             className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                             onClick={() => handleMilestone(index)}
                         >
                             Add milestone
                         </button>
                            }
                        </>
                    )}
                </div>
            </div>
        ))}

        {isModalOpen && (
          <DepositModal handleCloseModal={handleCloseModal} handleDeposit={handleDeposit} setDepositAmount={setDepositAmount}  depositAmount={depositAmount}  />
        )}

        {isMileModalOpen && 
        <AddMilestoneModal invoices={invoices} selectedInvoiceIndex={selectedInvoiceIndex} handleMileCloseModal={handleMileCloseModal}/>
        }
    </div>
</>
    );
  };

export default Invoices