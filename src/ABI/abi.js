export const Contract_ABI =
   [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "clientAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "termsAndConditions",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "paymentterm",
          "type": "string"
        }
      ],
      "name": "createInvoice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "erc20TokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "generateAllInvoice",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "clientAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "creatorAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "termsAndConditions",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "paymentterm",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "areConditionsMet",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isPaid",
              "type": "bool"
            }
          ],
          "internalType": "struct PayNVoice.Invoice[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        }
      ],
      "name": "getInvoice",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "clientAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "creatorAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "termsAndConditions",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "paymentterm",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "areConditionsMet",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isPaid",
              "type": "bool"
            }
          ],
          "internalType": "struct PayNVoice.Invoice",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "client",
          "type": "address"
        }
      ],
      "name": "getInvoicesForClient",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "clientAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "creatorAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "termsAndConditions",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "paymentterm",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "areConditionsMet",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isPaid",
              "type": "bool"
            }
          ],
          "internalType": "struct PayNVoice.Invoice[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "invoice",
      "outputs": [
        {
          "internalType": "address",
          "name": "clientAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "creatorAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "termsAndConditions",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "paymentterm",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "areConditionsMet",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isPaid",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "invoiceCounter",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        }
      ],
      "name": "payment",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        }
      ],
      "name": "releasePayment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]