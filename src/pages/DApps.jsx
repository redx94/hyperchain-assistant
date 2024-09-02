import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DApps = () => {
  const dappTemplates = [
    { name: 'DeFi Exchange', description: 'A decentralized exchange for trading tokens' },
    { name: 'NFT Marketplace', description: 'Platform for creating, buying, and selling NFTs' },
    { name: 'DAO Governance', description: 'Decentralized Autonomous Organization management system' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">DApp Development</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dappTemplates.map((template, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{template.description}</p>
              <Button>Use Template</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Custom DApp</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Start building your custom decentralized application from scratch.</p>
          <Button>Create Custom DApp</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DApps;