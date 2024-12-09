import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import WatchComponent from "./components/WatchComponent";
import MainContainer from "./components/MainContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import SearchedComponent from "./components/SearchedComponent";

const Layout = () => (
  <>
    <Header />
    <Body />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: (
          <ErrorBoundary>
            <WatchComponent />
          </ErrorBoundary>
        ),
      },
      {
        path: "/search",
        element: (
          <ErrorBoundary>
            <SearchedComponent />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
