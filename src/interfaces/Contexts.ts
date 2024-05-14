import { ConfigUrls, ReactChildren, SelectOptions, ValuesOfContent } from './Common';

// App Contexts

export interface AppState {
  config: ConfigUrls;
  isLoading?: boolean;
  logo: string;
}

export interface AppContextTypes {
  updateConfig: string;
  udpateLoading: string;
  updateLogo: string;
}

export interface AppAction {
  type: keyof AppContextTypes;
  value: string | boolean | ConfigUrls;
}

export interface AppContextProviderProps extends ReactChildren {
  initValue?: AppState;
}

// Auth Context

export interface AuthUser {
  refreshToken: { token: string };
  accessToken: { token: string };
  applicantEmail: string;
  applicantId: string;
  applicantName: string;
  applicationProfile: string;
  graduationYear: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  search: null;
}

export interface AuthContextTypes {
  LOGIN: string;
  LOGOUT: string;
}

export interface AuthAction {
  type: keyof AuthContextTypes;
  payload?: { user: AuthUser };
}

// Form Context

export interface FormState {
  options: ValuesOfContent<Array<SelectOptions>>;
  files: ValuesOfContent<FormFiles>;
  multiText: ValuesOfContent<Array<string>>;
}

export interface FormFiles {
  data: string;
  name: string;
}

export interface FormContextTypes {
  updateOptions: ValuesOfContent<Array<SelectOptions>>;
  updateFiles: ValuesOfContent<FormFiles>;
  removeFiles: ValuesOfContent<FormFiles>;
  updateMultiText: ValuesOfContent<Array<string>>;
  deleteMultiText: ValuesOfContent<Array<string>>;
  removeMultiText: ValuesOfContent<Array<string>>;
}

export interface FormAction {
  type: keyof FormContextTypes;
  value: any;
}
