const invoicesarray = [
    {
      clientAddress: "0x1234567890abcdef1234567890abcdef12345678",
      amount: 0.001,
      currency: "ETH",
      dueDate: "2024-10-20",
      isDepositMade: false,
      paymentTerms: "50% upfront, 50% on completion.",
      additionalConditions: "Late payment will incur a 5% penalty.",
      milestones: [
        { description: "Design Phase", amount: 0.0005, status: "Pending" },
        { description: "Development Phase", amount: 0.0005, status: "Pending" },
      ],
    },
    {
      clientAddress: "0xabcd1234567890abcdef1234567890abcdef5678",
      amount: 0.002,
      currency: "ETH",
      dueDate: "2024-11-10",
      isDepositMade: false,
      paymentTerms: "Payment in full upon delivery.",
      additionalConditions: "Work subject to client approval.",
      milestones: [
        { description: "Research", amount: 0.001, status: "Completed" },
        { description: "Implementation", amount: 0.001, status: "Pending" },
      ],
    },
  ];

  export default invoicesarray;


// import { useReadContract } from 'wagmi'
// import abi from '../../config/abi'
// import { useAccount } from 'wagmi';

//   function ReadContract() {
//     const account = useAccount();
    

//     const result = useReadContract({
//       abi:abi,
//       address: '0x58BA61c7Ba4923615c4c942D5164d8Cfa87df37C',
//       functionName: 'getInvoice',
//       account: account.address,
//     })

//     console.log("hello",result.data);
    
//   }