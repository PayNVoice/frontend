import React from 'react'

const DepositModal = ({handleCloseModal, handleDeposit, depositAmount, setDepositAmount}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">
            Deposit Funds
        </h2>
        <form onSubmit={() => handleDeposit}>
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
  )
}

export default DepositModal