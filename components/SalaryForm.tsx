
import React from 'react';
import { SalaryDetails } from '../types';

interface SalaryFormProps {
  formData: SalaryDetails;
  onChange: (newData: SalaryDetails) => void;
}

export const SalaryForm: React.FC<SalaryFormProps> = ({ formData, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    onChange({
      ...formData,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    });
  };

  const inputClass = "w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 text-sm";
  const labelClass = "block text-xs font-semibold text-slate-500 uppercase mb-1";

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-4">
      <h2 className="text-lg font-bold text-slate-800 border-b pb-3 mb-4">
        Edit Salary Details
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Employee Name</label>
          <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Job Role / Designation</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Employee ID</label>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Payroll Period</label>
          <input type="text" name="monthYear" value={formData.monthYear} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className={labelClass}>Basic Pay ($)</label>
          <input type="number" name="basicPay" value={formData.basicPay} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Medical Allowance ($)</label>
          <input type="number" name="medicalAllowance" value={formData.medicalAllowance} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Tax Amount ($)</label>
          <input type="number" name="tax" value={formData.tax} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Other Deductions ($)</label>
          <input type="number" name="deductions" value={formData.deductions} onChange={handleChange} className={inputClass} />
        </div>
      </div>

      <button 
        onClick={() => window.print()}
        className="w-full mt-6 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 rounded transition-colors"
      >
        Print Salary Slip
      </button>
    </div>
  );
};
