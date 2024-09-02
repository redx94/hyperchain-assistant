import { HomeIcon, CodeIcon, WalletIcon, LayersIcon } from "lucide-react";
import Dashboard from "./components/Dashboard";
import SmartContracts from "./pages/SmartContracts";
import Wallet from "./pages/Wallet";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Smart Contracts",
    to: "/smart-contracts",
    icon: <CodeIcon className="h-4 w-4" />,
    page: <SmartContracts />,
  },
  {
    title: "Wallet",
    to: "/wallet",
    icon: <WalletIcon className="h-4 w-4" />,
    page: <Wallet />,
  },
  {
    title: "DApps",
    to: "/dapps",
    icon: <LayersIcon className="h-4 w-4" />,
    page: <div>DApps Page (TODO)</div>,
  },
];