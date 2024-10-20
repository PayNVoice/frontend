import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import RootLayout from "../layout/RootLayout";

// PAGES
import Home from "../pages/homePage/Home";
import Overview from "../pages/dashboard/overview";
import Multiparty from "../pages/multiparty/Multiparty";
import TransactionHistory from "../pages/transactionHistory/TransactionHistory";
import CreateInvoice from "../pages/createInvoice/CreateInvoice";
import Invoices from "../pages/invoices/Invoices";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* SAMPLE ROUTE */}
      <Route index element={<Home />} />

      {/* EVERY OTHER PAGE ROUTING SHOULD BE DONE IN HERE */}
      <Route path="invoice" element={<RootLayout />}>
        {/* TO NAVIGATE TO THIS ROUTE JUST GO TO: /invoice/test  */}
        <Route path="dashboard" element={<Overview />} />
        <Route path="create-invoice" element={<CreateInvoice />} />
        <Route path="overview" element={<Overview />} />
        <Route path="invoices" element={<Invoices/>} />
        <Route path="multiparty" element={<Multiparty/>} />
        <Route path="transaction-history" element={<TransactionHistory/>} />
      </Route>
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
