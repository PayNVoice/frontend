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
import Multiparty from "../components/Multiparty";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* SAMPLE ROUTE */}
      <Route index element={<Home />} />

      {/* EVERY OTHER PAGE ROUTING SHOULD BE DONE IN HERE */}
      <Route path="invoice" element={<RootLayout />}>
        {/* TO NAVIGATE TO THIS ROUTE JUST GO TO: /invoice/test  */}
        <Route path="multiparty" element={<Multiparty/>} />
        <Route path="test" element={<Multiparty/>} />
      </Route>
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
