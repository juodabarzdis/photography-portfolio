import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import NavBar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";

import routes from "./components/App/routes";

const App = () => {
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />} ErrorBoundary={ErrorPage}>
        {Object.values(routes).map(({ path, getComponent }) => {
          const LazyRouteComponent = lazy(getComponent);
          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<Loading />}>
                  <LazyRouteComponent />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    )
  );

  return (
    <>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  );
};

export default App;
