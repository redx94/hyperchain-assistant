import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const SmartContracts = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Smart Contract Management</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Contract</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="contractName" className="block text-sm font-medium text-gray-700">Contract Name</label>
            <Input type="text" id="contractName" placeholder="MyToken" className="mt-1" />
          </div>
          <div>
            <label htmlFor="contractCode" className="block text-sm font-medium text-gray-700">Contract Code</label>
            <Textarea id="contractCode" rows={10} placeholder="pragma solidity ^0.8.0;" className="mt-1 font-mono" />
          </div>
          <Button type="submit">Deploy Contract</Button>
        </form>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Deployed Contracts</h2>
        {/* TODO: Add list of deployed contracts */}
        <p className="text-gray-500">No contracts deployed yet.</p>
      </div>
    </div>
  );
};

export default SmartContracts;