import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomepagePage from "./pages/homepage";
import ProfilePage from "./pages/profile";
import TransactionsPage from "./pages/transactions";
import TransactionDetailsPage from "./pages/transactionDetails";
import MarketPage from "./pages/market";
import Layout from "./components/layout/layout";
import GlobalPage from "./pages/global";
import { Toaster } from "./components/ui/sonner";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/client/queryClient";

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
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
