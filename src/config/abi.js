const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_erc20TokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ADDRESS_ZERO_NOT_PERMITTED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CANT_INITIATE_RELEASE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INSUFFICIENT_AMOUNT_INPUTTED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVOICE_DOES_NOT_EXIST",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVOICE_NOT_FOR_YOU",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVOICE_NOT_GENERATED_YET",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NOT_AUTHORIZE_TO_CALL_THIS_FUNCTION",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PAYMENT_HAS_BEEN_MADE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "YOU_DID_NOT_DEPLOY_THIS_CONTRACT",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "forWho",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        }
      ],
      "name": "InvoiceAcceptedSuccessfully",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "whocreates",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "createFor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "InvoiceCreatedSuccessfully",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "forwho",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        }
      ],
      "name": "InvoiceReturnedSuccessfully",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "MilestoneAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "milestoneIndex",
          "type": "uint256"
        }
      ],
      "name": "MilestoneCompleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "milestone",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "forWho",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ReceiptGenerated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_invoiceId",
          "type": "uint256"
        }
      ],
      "name": "acceptInvoice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_invoiceId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "addMilestone",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "confirmPaymentRelease",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "clientAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "ethAmount",
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
          "name": "paymentTerm",
          "type": "string"
        }
      ],
      "name": "createInvoice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "invoiceId_",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "invoiceId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ethAmount",
          "type": "uint256"
        }
      ],
      "name": "depositToEscrow",
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
            },
            {
              "internalType": "bool",
              "name": "hasAccepted",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "enum PayNVoice.Status",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isPaid",
                  "type": "bool"
                }
              ],
              "internalType": "struct PayNVoice.Milestone[]",
              "name": "milestones",
              "type": "tuple[]"
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
          "name": "milestone",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "clientAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "usdAmount",
          "type": "uint256"
        }
      ],
      "name": "generateReceipt",
      "outputs": [],
      "stateMutability": "nonpayable",
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
            },
            {
              "internalType": "bool",
              "name": "hasAccepted",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "enum PayNVoice.Status",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isPaid",
                  "type": "bool"
                }
              ],
              "internalType": "struct PayNVoice.Milestone[]",
              "name": "milestones",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct PayNVoice.Invoice",
          "name": "invoice1_",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
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
            },
            {
              "internalType": "bool",
              "name": "hasAccepted",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "enum PayNVoice.Status",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool",
                  "name": "isPaid",
                  "type": "bool"
                }
              ],
              "internalType": "struct PayNVoice.Milestone[]",
              "name": "milestones",
              "type": "tuple[]"
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
      "name": "getMilestones",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "enum PayNVoice.Status",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "isPaid",
              "type": "bool"
            }
          ],
          "internalType": "struct PayNVoice.Milestone[]",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "invoiceCount",
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
      "inputs": [],
      "name": "invoiceCreator",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "invoices",
      "outputs": [
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
        },
        {
          "internalType": "bool",
          "name": "hasAccepted",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_invoiceId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_milestoneIndex",
          "type": "uint256"
        }
      ],
      "name": "markMilestoneCompleted",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  export default abi;