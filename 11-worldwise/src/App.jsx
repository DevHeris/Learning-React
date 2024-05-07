import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import ProtectedRoute from "./pages/ProtectedRoute";

// import Login from "./pages/Login";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// ------------bundle size BEFORE code splitting

// dist/index.html                   0.49 kB │ gzip:   0.31 kB
// dist/assets/index-CCw9Owii.css   29.89 kB │ gzip:   5.06 kB
// dist/assets/index-CCrbAx6b.js   514.54 kB │ gzip: 148.31\

// ----------bundle size AFTER code splitting optimization technique

// dist/index.html                           0.49 kB │ gzip:   0.32 kB
// dist/assets/Logo-CtfPMVPO.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-fP6ipu4U.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-CX3p79nw.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-DKp2I-AC.css         0.50 kB │ gzip:   0.30 kB
// dist/assets/PageNav-C2lIXkPA.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-oxAkzurh.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-CUYVsEZn.css           26.24 kB │ gzip:   4.38 kB
// dist/assets/Product.module-DpVUF5Lu.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-BPLMMdED.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-CX0MSMBA.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-C00v7bxK.js           0.49 kB │ gzip:   0.28 kB
// dist/assets/Pricing-B0EPqYHO.js           0.65 kB │ gzip:   0.42 kB
// dist/assets/Homepage-C-_jwDsQ.js          0.67 kB │ gzip:   0.42 kB
// dist/assets/Product-CtnDfLd2.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-BYO22o0d.js             1.00 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-ConveykW.js       156.97 kB │ gzip:  46.21 kB
// dist/assets/index--JxGARqJ.js           355.89 kB │ gzip: 101.77 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
