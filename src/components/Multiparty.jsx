import React from 'react'

const Multiparty = () => {
    const contracts = [
        {
          title: "Project Alpha",
          parties: 3,
          totalValue: "$25,000",
          status: "In Progress",
          statusColor: "bg-green-100 text-green-700",
        },
        {
          title: "Service Beta",
          parties: 4,
          totalValue: "$40,000",
          status: "Pending",
          statusColor: "bg-yellow-100 text-yellow-700",
        },
        {
            title: "Service Beta",
            parties: 4,
            totalValue: "$40,000",
            status: "Pending",
            statusColor: "bg-yellow-100 text-yellow-700",
        },
          {
            title: "Service Beta",
            parties: 4,
            totalValue: "$40,000",
            status: "Pending",
            statusColor: "bg-yellow-100 text-yellow-700",
          },
          {
            title: "Service Beta",
            parties: 4,
            totalValue: "$40,000",
            status: "Pending",
            statusColor: "bg-yellow-100 text-yellow-700",
          },
          {
            title: "Service Beta",
            parties: 4,
            totalValue: "$40,000",
            status: "Pending",
            statusColor: "bg-yellow-100 text-yellow-700",
          },
      ];
      
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Active Contracts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contracts.map((contract, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{contract.title}</h3>
            <p className="text-sm text-gray-500">{contract.parties} Parties</p>
            <p className="text-sm text-gray-500 mb-4">Total Value: {contract.totalValue}</p>
            <span
              className={`inline-block px-4 py-1 text-sm font-medium rounded-full ${contract.statusColor}`}
            >
              {contract.status}
            </span>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default Multiparty