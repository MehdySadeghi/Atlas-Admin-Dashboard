import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Overview from "./components/Overview";
import Analytics from "./components/Analytics";
import Statistics from "./components/Statistics";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Users from "./components/Users";
import Settings from "./components/Settings";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import SpinnerFullPage from "./components/SpinnerFullPage";

const AppLayout = lazy(() => import("./pages/AppLayout"));
const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/app" element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="statistics" element={<Statistics />} />
            </Route>

            <Route path="products" element={<Products />}>
              <Route index element={<ProductList />} />
              <Route path="productList" element={<ProductList />} />
              <Route
                path="productDetails/:productId"
                element={<ProductDetails />}
              />
            </Route>

            <Route path="users" element={<Users />} />

            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
