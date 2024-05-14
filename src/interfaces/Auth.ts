export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface ResetPassword {
    newPassword: string;
    confirmPassword: string;
  }
  
  export interface SignUpFormData {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    registrationNumber: string;
    graduationYear: string;
    company?: string;
    recordType?: string;
  }
  
  export interface VerifySignUpFormData extends SignUpFormData {
    otp: string;
  }
  