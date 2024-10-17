import React, { createContext, useContext, useState, useCallback } from 'react';
import { useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { parseEther } from 'viem';
import abi from '../config/abi';
import { contractAddress } from '../config/contractAddress';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

const ContractContext = createContext();

export const useContract = () => useContext(ContractContext);

export const ContractProvider = ({ children }) => {
  const [txHash, setTxHash] = useState(null);
  const { writeContractAsync, isPending } = useWriteContract();
  const account = useAccount();

  const createInvoice = async (invoiceData) => {
    try {
      const {
        customerAddress,
        amount,
        date,
        additionalConditions,
        paymentTerm,
        title,
      } = invoiceData;

      const amountInWei = parseEther(amount);
      const dueDateTimestamp = Math.floor(new Date(date).getTime() / 1000);

      const tx = await writeContractAsync({
        address: contractAddress,
        abi: abi,
        functionName: "createInvoice",
        args: [
          customerAddress,
          amountInWei,
          dueDateTimestamp,
          additionalConditions,
          paymentTerm,
          title   
        ]
      });
      
      console.log("tx::", tx);
      setTxHash(tx);
      toast.info("Transaction submitted. Waiting for confirmation...");
      return tx;
    } catch (err) {
      console.error("Error creating invoice:", err);
      toast.error("Error creating invoice: " + err.message);
      throw err;
    }
  };

  const useGenerateAllInvoice = () => {
    const { data: asyncInvoiceList, isLoading, error, isSuccess } = useReadContract({
      abi: abi,
      address: contractAddress,
      functionName: 'generateAllInvoice',
      account: account.address,
    });

    return { asyncInvoiceList, isLoading, error, isSuccess };
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash: txHash,
    });

  const value = {
    createInvoice,
    useGenerateAllInvoice,
    isPending,
    isConfirming,
    isConfirmed,
    txHash,
  };

  return (
    <ContractContext.Provider value={value}>
      {children}
    </ContractContext.Provider>
  );
};
