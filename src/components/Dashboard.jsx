import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AIAssistant from './AIAssistant';
import Header from './Header';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
        <AIAssistant />
      </div>
    </div>
  );
};

export default Dashboard;