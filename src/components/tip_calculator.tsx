"use client"; 
import { useState, ChangeEvent } from "react";
import{
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };
  const handleTipPercentageChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setTipPercentage(parseFloat(e.target.value));
  };
  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100); 
      setTipAmount(tip); 
      setTotalAmount(billAmount + tip); 
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jfif')" }}>
 
      <Card className="bg-transparent rounded-2xl shadow-lg p-8 w-full max-w-md border-transparent">
       
        <CardHeader>
        
          <CardTitle className="text-black ">Tip Calculator</CardTitle>
          <CardDescription className="text-amber-900">
            Enter the bill amount and tip percentage to calculate the tip and
            total.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input for bill amount */}
          <div className="grid gap-2">
            <Label htmlFor="bill-amount">Bill Amount</Label>
            <Input
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount"
              value={billAmount !== null ? billAmount : ""}
              onChange={handleBillAmountChange}
            />
          </div>
          {/* Input for tip percentage */}
          <div className="grid gap-2">
            <Label htmlFor="tip-percentage">Tip Percentage</Label>
            <Input
              id="tip-percentage"
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={handleTipPercentageChange}
            />
          </div>
          <Button className="bg-amber-900 text-white hover:bg-amber-800" onClick={calculateTip}>
  Calculate
</Button>

        </CardContent>
        <CardFooter className="grid gap-2">
          <div className="flex items-center justify-between">
            <span>Tip Amount:</span>
            <span className="font-bold">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Total Amount:</span>
            <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}