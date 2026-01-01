
import React from 'react';
import { SalaryDetails } from '../types';
import { ASSETS, GROVERS_COMPANY } from '../constants';
import { SalaryTable } from './SalaryTable';

interface SalarySlipProps {
  data: SalaryDetails;
}

export const SalarySlip: React.FC<SalarySlipProps> = ({ data }) => {
  return (
    <div className="a4-page print-container relative flex flex-col border border-slate-100 shadow-sm">
      {/* 1. Logo at top */}
      <div className="mb-6">
        <img 
          src={ASSETS.LOGO} 
          alt="Grovers Logo" 
          className="h-16 object-contain" 
        />
      </div>

      {/* 2. Salary Slip Heading */}
      <div className="mb-8 border-b-2 border-slate-800 pb-2">
        <h1 className="text-3xl font-bold text-slate-800 uppercase tracking-tight">Salary Slip</h1>
      </div>

      {/* 3. Company Details Section */}
      <div className="grid grid-cols-2 gap-8 mb-10 text-[11px] text-slate-600">
        <div>
          <p className="font-bold text-slate-900 text-sm mb-1">{GROVERS_COMPANY.name}</p>
          <p className="max-w-[200px] leading-tight mb-1">{GROVERS_COMPANY.address}</p>
          <p>Registration No: {GROVERS_COMPANY.registrationNo}</p>
        </div>
        <div className="text-right flex flex-col justify-end">
          <p>Phone: {GROVERS_COMPANY.phone}</p>
          <p>Email: {GROVERS_COMPANY.email}</p>
          <p>Website: {GROVERS_COMPANY.website}</p>
        </div>
      </div>

      {/* 4. Employee Information Section */}
      <div className="bg-slate-50 p-6 rounded mb-8 grid grid-cols-2 gap-6 border border-slate-200">
        <div className="space-y-4">
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Employee Name</label>
            <p className="text-base font-bold text-slate-800 uppercase">{data.employeeName}</p>
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Employee ID</label>
            <p className="text-sm text-slate-700">{data.employeeId}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Job Role / Designation</label>
            <p className="text-base font-semibold text-slate-800">{data.designation}</p>
          </div>
          <div>
            <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Payroll Period</label>
            <p className="text-sm font-medium text-slate-700">{data.monthYear}</p>
          </div>
        </div>
      </div>

      {/* 5. Well-aligned Table Breakdown */}
      <SalaryTable data={data} />

      {/* 6. CEO Signature Area (Bottom Right) */}
      <div className="mt-auto pt-16 flex justify-end">
        <div className="text-center w-64">
          <div className="relative mb-2 pb-2">
            <img 
              src={ASSETS.SIGNATURE} 
              alt="CEO Signature" 
              className="h-20 mx-auto object-contain"
            />
            <div className="h-0.5 bg-slate-900 w-full mt-1"></div>
          </div>
          <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Authorized Signature</p>
          <p className="text-[10px] text-slate-500 font-medium">Chief Executive Officer</p>
        </div>
      </div>

      {/* Optional tiny footer for official look */}
      <div className="mt-12 text-[9px] text-slate-400 flex justify-between uppercase tracking-widest border-t border-slate-100 pt-4">
        <span>Confidential payroll document</span>
        <span>Generated on {new Date().toLocaleDateString()}</span>
      </div>
    </div>
  );
};
