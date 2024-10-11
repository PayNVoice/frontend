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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* SAMPLE ROUTE */}
      <Route index element={<Home />} />

      {/* EVERY OTHER PAGE ROUTING SHOULD BE DONE IN HERE */}
      <Route path="invoice" element={<RootLayout />}>
        {/* TO NAVIGATE TO THIS ROUTE JUST GO TO: /invoice/test  */}
        <Route path="test" element={<p>hello</p>} />
        <Route path="overview" element={<Overview />} />
      </Route>
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
