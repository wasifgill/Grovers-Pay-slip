
import React from 'react';
import { SalaryDetails } from '../types';

interface SalaryTableProps {
  data: SalaryDetails;
}

export const SalaryTable: React.FC<SalaryTableProps> = ({ data }) => {
  const grossEarnings = data.basicPay + data.medicalAllowance;
  const totalDeductions = data.tax + data.deductions;
  const netSalary = grossEarnings - totalDeductions;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <div className="w-full mt-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Earnings Section */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 border-b pb-1">Earnings</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm py-1">
              <span className="text-slate-600">Basic Earning Pay</span>
              <span className="font-medium">{formatCurrency(data.basicPay)}</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-slate-600">Medical Allowance</span>
              <span className="font-medium">{formatCurrency(data.medicalAllowance)}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold border-t pt-2 mt-2">
              <span>Gross Earnings</span>
              <span>{formatCurrency(grossEarnings)}</span>
            </div>
          </div>
        </div>

        {/* Deductions Section */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 border-b pb-1">Deductions</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm py-1">
              <span className="text-slate-600">Tax</span>
              <span className="font-medium text-red-600">-{formatCurrency(data.tax)}</span>
            </div>
            <div className="flex justify-between text-sm py-1">
              <span className="text-slate-600">Other Deductions</span>
              <span className="font-medium text-red-600">-{formatCurrency(data.deductions)}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold border-t pt-2 mt-2">
              <span>Total Deductions</span>
              <span className="text-red-600">{formatCurrency(totalDeductions)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Net Pay Highlight */}
      <div className="mt-12 bg-slate-900 text-white p-6 rounded-lg flex justify-between items-center shadow-lg">
        <div>
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">Net Take-Home Pay</p>
          <p className="text-3xl font-bold mt-1 tracking-tight">{formatCurrency(netSalary)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400 italic">Total Salary for {data.monthYear}</p>
        </div>
      </div>
    </div>
  );
};
