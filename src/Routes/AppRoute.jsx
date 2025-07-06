import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NoMatch from "../components/NoMatch";
import { Oval } from "react-loader-spinner";
import BuyerPropertiesRoute from "../components/Routes/BuyerPropertiesRoute";

// Import other components using lazy
const Home = lazy(() => import("../components/home/Home"));
const AddProperty = lazy(() => import("../components/addProperty/AddProperty"));
const Login = lazy(() => import("../components/auth/Login"));
const Register = lazy(() => import("../components/auth/Regsiter"));


const About = lazy(() => import("../components/about/About"));
const GroupProperties = lazy(() =>
  import("../components/addProperty/sell/groupProperties/GroupProperties")
);
const SingleProperty = lazy(() =>
  import("../components/addProperty/sell/singleProperty/SingleProperty")
);
const RentProperty = lazy(() =>
  import("../components/addProperty/rent/RentProperty")
);
const Pg = lazy(() => import("../components/addProperty/pg/Pg"));
const Commercial = lazy(() =>
  import("../components/addProperty/commercial/Commercial")
);

const SellerListingsRoute = lazy(() =>
  import("../components/Routes/SellerListingsRoute")
);

const PropertyDetailsRoute = lazy(() =>
  import("../components/Routes/PropertyDetailsRoute")
);

const GalleryRoute = lazy(() => import("../components/Routes/GalleryRoute"));

function AppRoute() {
  const Loading = () => {
    return (
      <div
        style={{
          height: "calc(100vh - 71px)",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Oval
          height={50}
          width={50}
          color="#ffb300"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#ffb300"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/property/:type"
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="login"
        element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="my-listings"
        element={
          <Suspense fallback={<Loading />}>
            <SellerListingsRoute />
          </Suspense>
        }
      />
      <Route
        path="buy/:category/:city"
        element={
          <Suspense fallback={<Loading />}>
            <BuyerPropertiesRoute />
          </Suspense>
        }
      />
      <Route
        path="rent/:category/:city"
        element={
          <Suspense fallback={<Loading />}>
            <BuyerPropertiesRoute />
          </Suspense>
        }
      />
      <Route
        path="pg/:category/:city"
        element={
          <Suspense fallback={<Loading />}>
            <BuyerPropertiesRoute />
          </Suspense>
        }
      />
      <Route
        path="commercial/:category/:city"
        element={
          <Suspense fallback={<Loading />}>
            <BuyerPropertiesRoute />
          </Suspense>
        }
      />

      <Route
        path="buy/:propertyid"
        element={
          <Suspense fallback={<Loading />}>
            <PropertyDetailsRoute />
          </Suspense>
        }
      />

      <Route
        path="rent/:propertyid"
        element={
          <Suspense fallback={<Loading />}>
            <PropertyDetailsRoute />
          </Suspense>
        }
      />
      <Route
        path="pg/:propertyid"
        element={
          <Suspense fallback={<Loading />}>
            <PropertyDetailsRoute />
          </Suspense>
        }
      />
      <Route
        path="gallery/:propertyid"
        element={
          <Suspense fallback={<Loading />}>
            <GalleryRoute />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="add-property"
        element={
          <Suspense fallback={<Loading />}>
            <AddProperty />
          </Suspense>
        }
      />

      <Route
        path="add-property/sell/group/:category"
        element={
          <Suspense fallback={<Loading />}>
            <GroupProperties />
          </Suspense>
        }
      />
      <Route
        path="add-property/sell/group/:category/:id"
        element={
          <Suspense fallback={<Loading />}>
            <GroupProperties />
          </Suspense>
        }
      />
      <Route
        path="add-property/pg"
        element={
          <Suspense fallback={<Loading />}>
            <Pg />
          </Suspense>
        }
      />
      <Route
        path="add-property/pg/:id"
        element={
          <Suspense fallback={<Loading />}>
            <Pg />
          </Suspense>
        }
      />

      <Route
        path="add-property/sell/single/:category"
        element={
          <Suspense fallback={<Loading />}>
            <SingleProperty />
          </Suspense>
        }
      />
      <Route
        path="add-property/sell/single/:category/:id"
        element={
          <Suspense fallback={<Loading />}>
            <SingleProperty />
          </Suspense>
        }
      />
      <Route
        path="add-property/sell/commercial/:category"
        element={
          <Suspense fallback={<Loading />}>
            <Commercial />
          </Suspense>
        }
      />
      <Route
        path="add-property/sell/commercial/:category/:id"
        element={
          <Suspense fallback={<Loading />}>
            <Commercial />
          </Suspense>
        }
      />
      <Route
        path="add-property/rent/commercial/:category"
        element={
          <Suspense fallback={<Loading />}>
            <Commercial />
          </Suspense>
        }
      />
      <Route
        path="add-property/rent/commercial/:category/:id"
        element={
          <Suspense fallback={<Loading />}>
            <Commercial />
          </Suspense>
        }
      />
      <Route
        path="add-property/rent/:category"
        element={
          <Suspense fallback={<Loading />}>
            <RentProperty />
          </Suspense>
        }
      />
      <Route
        path="add-property/rent/:category/:id"
        element={
          <Suspense fallback={<Loading />}>
            <RentProperty />
          </Suspense>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoute;
