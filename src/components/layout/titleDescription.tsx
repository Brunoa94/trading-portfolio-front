import { Container } from "@/theme/container";
import { useLocation } from "react-router-dom";

interface RouteConfig {
  title: string;
  description: string;
}

const routeConfig: Record<string, RouteConfig> = {
  "/": {
    title: "Dashboard",
    description: "Overview of your trading portfolio performance",
  },
  "/profile": {
    title: "Profile",
    description: "Manage your account settings and preferences",
  },
  "/transactions": {
    title: "Transactions",
    description: "View and manage all your trading activities",
  },
  "/market": {
    title: "Market",
    description: "Explore market trends and trading opportunities",
  },
  "/global": {
    title: "Global Overview",
    description: "Market insights and global trading analytics",
  },
};

export default function TitleDescription() {
  const location = useLocation();

  const getRouteConfig = (): RouteConfig => {
    if (location.pathname.startsWith("/transaction/")) {
      return {
        title: "Transaction Details",
        description: "Detailed view of your transaction",
      };
    }

    return (
      routeConfig[location.pathname] || {
        title: "Capital Lens",
        description: "Your trading portfolio companion",
      }
    );
  };

  const { title, description } = getRouteConfig();

  return (
    <div
      className={`flex flex-col items-start text-center ${Container.MainContainer} px-0`}
    >
      <h1 className="bg-gradient-to-br from-purple-900 via-white/40 to-green-600 bg-clip-text text-3xl font-bold text-transparent">
        {title}
      </h1>
      <p className="text-muted-foreground mt-2 text-sm">{description}</p>
    </div>
  );
}
