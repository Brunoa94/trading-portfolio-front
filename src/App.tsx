import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomepagePage from "./pages/homepage";
import ProfilePage from "./pages/profile";
import TransactionsPage from "./pages/transactions";
import TransactionDetailsPage from "./pages/transactionDetails";
import MarketPage from "./pages/market";
import Layout from "./components/app/layout/layout";
import GlobalPage from "./pages/global";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomepagePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/transactions",
          element: <TransactionsPage />,
        },
        {
          path: "/transaction/[id]",
          element: <TransactionDetailsPage />,
        },
        {
          path: "/market",
          element: <MarketPage />,
        },
        {
          path: "/global",
          element: <GlobalPage />,
        },
      ],
    },
  ]);

  return (
    <div className="flex h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
