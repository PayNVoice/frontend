# Smart Contract Invoicing and Payment Platform

## Project Overview

The Smart Contract Invoicing and Payment Platform is a decentralized business tool designed to streamline invoicing, payments, and multi-party agreements using web3 technologies. It leverages smart contracts to automate invoicing, escrow, and payment distribution, ensuring transparency and security for business transactions. The platform is built using Vite React for a modern and fast frontend experience.

## Key Features

1. Smart Contract Invoicing: Automated invoice creation with terms, due dates, and conditions for payment release via smart contracts.
2. Escrow and Payment Automation: Securely holds funds in escrow until conditions are met.
3. Multi-Party Contract Support: Splits payments among multiple stakeholders based on predefined terms.
4. Milestone Payments: Allows funds to be released in stages as milestones are met.


## Getting Started

### Prerequisites

Before starting the project, ensure you have the following installed on your system:

1. Node.js (v14 or higher)
2. npm
3. A web3 wallet like MetaMask

### Installation

1. Clone the repository

2. Install the dependencies: npm install

3. Start the development server: npm run dev

4. Open your browser and navigate to http://localhost:3000 (or the port specified in your console output).

## Folder Structure

├── public/ # Static assets   
├── src/    # Main application 

│   ├── app/ # Main application              
│   ├── assets/ # Static files (images, icons, etc.)          
│   ├── components/ # Reusable UI components        
│   ├── config/ # Application configuration settings           
│   ├── layout/ # Page layout components            
│   ├── pages/ # Application pages and views            
│   ├── router/ # Routing configurations          
│   ├── utils/ # Utility functions and helpers            
│   ├── connection.js # Web3 and wallet connection logic   
│   └── main.jsx # Main entry point for React application         
├── .env # Environment variables (e.g., contract addresses)                 
├── index.html # Main HTML entry point          
├── package.json # Project dependencies and scripts          
├── vite.config.js  # Vite configuration       
├── postcss.config.js # PostCSS configuration    
├── .gitignore # Files and directories to ignore in Git            
└── eslint.config.js # ESLint configuration for linting JavaScript/React code      
