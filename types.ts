
export interface SalaryDetails {
  employeeName: string;
  designation: string;
  employeeId: string;
  monthYear: string;
  basicPay: number;
  medicalAllowance: number;
  tax: number;
  deductions: number;
}

export interface CompanyDetails {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  registrationNo: string;
}
