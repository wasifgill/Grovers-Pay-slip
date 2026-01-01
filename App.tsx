
import React, { useState } from 'react';
import { SalaryForm } from './components/SalaryForm';
import { SalarySlip } from './components/SalarySlip';
import { SalaryDetails } from './types';

const App: React.FC = () => {
  const [salaryData, setSalaryData] = useState<SalaryDetails>({
    employeeName: 'John Doe',
    designation: 'Senior Frontend Engineer',
    employeeId: 'EMP-GRV-2024-042',
    monthYear: 'October 2024',
    basicPay: 8500,
    medicalAllowance: 450,
    tax: 1200,
    deductions: 150
  });

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navigation (Hidden in Print) */}
      <div className="no-print bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black text-slate-800 uppercase tracking-tighter">
              Grovers <span className="text-slate-400 font-light">Payroll</span>
            </h1>
          </div>
          <button 
             onClick={() => window.print()}
             className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded text-sm font-bold transition-all uppercase tracking-wide"
          >
            Print Slip
          </button>
        </div>
      </div>

      {/* Workspace */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Editor (Hidden in Print) */}
        <div className="no-print lg:col-span-4 lg:sticky lg:top-24">
          <SalaryForm formData={salaryData} onChange={setSalaryData} />
          <p className="mt-6 text-[10px] text-slate-400 text-center uppercase tracking-widest">
            Internal HR Document Generator
          </p>
        </div>

        {/* Document Preview */}
        <div className="lg:col-span-8 flex justify-center pb-20">
          <SalarySlip data={salaryData} />
        </div>
      </div>
    </div>
  );
};

export default App;
