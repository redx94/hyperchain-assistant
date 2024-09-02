import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SmartContracts = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');
  const [contracts, setContracts] = useState([]);

  const handleDeployContract = (e) => {
    e.preventDefault();
    // TODO: Implement contract deployment logic
    const newContract = {
      name: e.target.contractName.value,
      network: selectedNetwork,
      address: '0x' + Math.random().toString(16).substr(2, 40),
    };
    setContracts([...contracts, newContract]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Smart Contract Management</h1>
      <Tabs defaultValue="create">
        <TabsList>
          <TabsTrigger value="create">Create Contract</TabsTrigger>
          <TabsTrigger value="deployed">Deployed Contracts</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create New Contract</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDeployContract} className="space-y-4">
                <div>
                  <label htmlFor="contractName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contract Name</label>
                  <Input type="text" id="contractName" placeholder="MyToken" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="contractCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contract Code</label>
                  <Textarea id="contractCode" rows={10} placeholder="pragma solidity ^0.8.0;" className="mt-1 font-mono" />
                </div>
                <div>
                  <label htmlFor="network" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Network</label>
                  <Select onValueChange={setSelectedNetwork} defaultValue={selectedNetwork}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select network" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="binance">Binance Smart Chain</SelectItem>
                      <SelectItem value="polygon">Polygon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit">Deploy Contract</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="deployed">
          <Card>
            <CardHeader>
              <CardTitle>Deployed Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              {contracts.length > 0 ? (
                <ul className="space-y-2">
                  {contracts.map((contract, index) => (
                    <li key={index} className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded">
                      <span>{contract.name}</span>
                      <span className="text-sm text-gray-500">{contract.network}</span>
                      <span className="text-sm text-gray-500">{contract.address}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No contracts deployed yet.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SmartContracts;