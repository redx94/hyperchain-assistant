import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Wallet = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Wallet Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0.00 ETH</p>
            <p className="text-sm text-gray-500">$0.00 USD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full">Send</Button>
            <Button className="w-full" variant="outline">Receive</Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          {/* TODO: Add transaction history table */}
          <p className="text-gray-500">No transactions yet.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wallet;