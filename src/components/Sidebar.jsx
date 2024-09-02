import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, CodeIcon, WalletIcon, LayersIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <HomeIcon className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/smart-contracts" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <CodeIcon className="inline-block mr-2" size={20} />
          Smart Contracts
        </Link>
        <Link to="/wallet" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <WalletIcon className="inline-block mr-2" size={20} />
          Wallet
        </Link>
        <Link to="/dapps" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <LayersIcon className="inline-block mr-2" size={20} />
          DApps
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;