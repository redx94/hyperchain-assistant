import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleSend = (amount) => {
    if (amount > 0 && amount <= balance) {
      setBalance(prevBalance => prevBalance - amount);
      setTransactions([
        { type: 'Send', amount, date: new Date().toLocaleString() },
        ...transactions
      ]);
    }
  };

  const handleReceive = (amount) => {
    if (amount > 0) {
      setBalance(prevBalance => prevBalance + amount);
      setTransactions([
        { type: 'Receive', amount, date: new Date().toLocaleString() },
        ...transactions
      ]);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Wallet Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{balance.toFixed(2)} ETH</p>
            <p className="text-sm text-gray-500">${(balance * 3000).toFixed(2)} USD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Send</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send ETH</DialogTitle>
                </DialogHeader>
                <Input type="number" placeholder="Amount" id="sendAmount" />
                <Button onClick={() => handleSend(parseFloat(document.getElementById('sendAmount').value))}>
                  Confirm Send
                </Button>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" variant="outline">Receive</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Receive ETH</DialogTitle>
                </DialogHeader>
                <Input type="number" placeholder="Amount" id="receiveAmount" />
                <Button onClick={() => handleReceive(parseFloat(document.getElementById('receiveAmount').value))}>
                  Confirm Receive
                </Button>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          {transactions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx, index) => (
                  <TableRow key={index}>
                    <TableCell>{tx.type}</TableCell>
                    <TableCell>{tx.amount} ETH</TableCell>
                    <TableCell>{tx.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-gray-500">No transactions yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Wallet;