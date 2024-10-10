import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS

// PAGES
import Home from "../pages/homePage/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* SAMPLE ROUTE */}
      <Route index element={<Home />} />

      {/* SAMPLE IF WE IMPLEMENT A LAYOUT */}
      {/* <Route path="admin" element={<RootLayout />}>
           
          </Route> */}
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
