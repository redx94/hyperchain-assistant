import { HomeIcon, CodeIcon, WalletIcon, LayersIcon } from "lucide-react";
import Dashboard from "./components/Dashboard";
import SmartContracts from "./pages/SmartContracts";
import Wallet from "./pages/Wallet";
import DApps from "./pages/DApps";
import Index from "./pages/Index";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Dashboard><Index /></Dashboard>,
  },
  {
    title: "Smart Contracts",
    to: "/smart-contracts",
    icon: <CodeIcon className="h-4 w-4" />,
    page: <Dashboard><SmartContracts /></Dashboard>,
  },
  {
    title: "Wallet",
    to: "/wallet",
    icon: <WalletIcon className="h-4 w-4" />,
    page: <Dashboard><Wallet /></Dashboard>,
  },
  {
    title: "DApps",
    to: "/dapps",
    icon: <LayersIcon className="h-4 w-4" />,
    page: <Dashboard><DApps /></Dashboard>,
  },
];