import ErrorPage from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Transactions from "../pages/Transactions/Transactions";
import UserDashboard from "../pages/UserDashboard/UserDashboard";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/transactions/:id",
    element: <Transactions />,
    exact: true,
  },
  {
    path: "/user",
    element: <UserDashboard />,
    exact: true,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    exact: true,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
