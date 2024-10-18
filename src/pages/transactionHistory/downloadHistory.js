
const DownloadMilestones = () => {
  const [invoiceHistory, setInvoiceHistory] = useState([]);

  useEffect(() => {
    const data = [
    ]

    setInvoiceHistory(data);
  }, []);


  return (
    <div>
      <h1>Milestones</h1>
      <button onClick={downloadCSV} className="bg-blue-500 text-white px-4 py-2 rounded">
        Download Transaction History
      </button>
    </div>
  );
};

export default DownloadMilestones;
