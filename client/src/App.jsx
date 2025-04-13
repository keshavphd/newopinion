import Applayout from "./assets/Applayout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Dasboard from "./pages/Dasboard";
import MyAccount from "./pages/MyAccount";
import Surveys from "./pages/Surveys";
import Rewards from "./pages/Rewards";
import Referal from "./pages/Referal";
import Setting from "./pages/Setting";
import Support from "./pages/Support";
import ScrollToTop from "./pages/TopOfPage";
import Hi from "./pages/Hi";
import Homes from "./pages/Homes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <ScrollToTop/>,
      <Applayout />
      </>,
      children: [
        {
          path:":ids",
          element: <Homes />,
        },
        {
          path: "",
          element: <Home />,
        },
      
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "dasboard",
              element: <Dasboard />,
            },
            {
              path: "myaccount",
              element: <MyAccount />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "surveys",
              element: <Surveys />,
            },
            {
              path: "rewards",
              element: <Rewards />,
            },
            {
              path: "referal",
              element: <Referal />,
            },
            {
              path: "setting",
              element: <Setting />,
            },
            {
              path: "support",
              element: <Support />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
