import { ValuesOfStringOnly } from "@/interfaces/Common";

export const KEY_AZURE_TOKEN = 'azure_token';
export const KEY_USER_DETAILS = 'userDetails';
export const KEY_LOGIN_ACCESS_TOKEN = 'login_token';
export const KEY_ACCESS_TOKEN = 'access_token';
export const KEY_REFRESH_TOKEN = 'refresh_token';
export const KEY_CONFIG_URL = 'https://config-api.ken42.com/v1/configs/url';
export const REFRESH_URL = 'https://api-v2.ken42.com/flame-uat-admission/api/app/refreshToken';
export const PAYMENT_CALLBACK_URL = 'https://alumni-management-api-dev.ken42.com/api/v1/payment/capture/payment';

export const REGEX = {
  NAME: /^[a-zA-Z ]*$/,
  MOBILE: /^(\+\d{1,3}[- ]?)?\d{10}$/,
  PINCODE: /^[0-9]{6,6}$/,
  NUMBER: /[^0-9]/,
  ONLYNUMBER: /^[0-9]*$/,
  NUMBERWITHDECIMAL: /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/,
  ANNUALINCOME: /^(?!0)\d*(\.\d+)?$/,
  DIGITS_ONLY_UPTO_100: /^\-?(([0-9]\d?|0\d{1,2})((\.)\d{0,2})?|100((\.)0{1,2})?)$/,
  DIGITS_ONLY_UPTO_10: /^\-?((0\d|\d)?((\.)\d{0,2})?|10((\.)0{1,2})?)$/,
  DIGITS_ONLY_UPTO_4: /^\-?((0[0-3]|[0-3])?((\.)\d{0,2})?|(4|04)((\.)0{1,2})?)$/,
  PERCENTAGE: /^100$/,
  DECIMAL: /^(\d*\.)?\d+$/,
  ALPHANUMBERIC: /^[a-zA-Z0-9]+$/,
  ALPHANUMBERICUPPERCASE: /^[A-Z0-9]+$/,
  CGPA: /^10$/,
  GST: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  PAN: /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/,
  GRADE: /^[a-fA-FOoPp]$/,
  MIXED: /^[a-zA-Z0-9-./, ]*$/,
  MIXED_ADDRESS: /^[a-zA-Z0-9-.#/, ]*$/,
  PARENT_DOC: /^aadhaarParent/,
  PHONE_NUMBER: /^[0-9]*$/,
  AADHAAR: '^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$',
  AlphaSpecial: /^[A-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i,
  LINKEDIN: /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/([a-zA-Z0-9-]+)\/?/,
  TWITTER: /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,
  CHEQUE: /^\d{6}$/,
  HTTPS:
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g,
  EMAIL: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  YEAR: /^\d{4}$/,
  CONTAINNUMBERS: /.*\d.*/,
  CONTAINSYMBOLS: /.*[!~`@#$%^&*()_+\-=<,.>\/?].*/,
  CONTAINUPPERCASE: /.*[A-Z].*/,
  CONTAINLOWERCASE: /.*[a-z].*/,
  RANGEWITHOUTSPACE: /^(\d+)(?:-(\d+))?$/,
  MEETCONFERENCE:
    /^(https?:\/\/(www\.)?us05web\.zoom\.us\/j\/\d{11}\?pwd=[\w\d\.\-_]+|https:\/\/meet\.google\.com\/[\w\-]+|https:\/\/web\.skype\.com\/\?\?action=joinmeetnow&correlationId=[\w\d\-]+&source=skypecomwidget&call=true)$/i,
};

export const ROLES = { FACULTY: 'FACULTY', STUDENT: 'STUDENT' };
export const PERMISSIONS = {
  [ROLES.FACULTY]: {
    FACULTY_HOME: 'FACULTY_HOME',
  },
  [ROLES.STUDENT]: {
    STUDENT_HOME: 'STUDENT_HOME',
  },
};
export const TERM_CONDITIONS_URL = 'https://ken-42.s3.ap-southeast-1.amazonaws.com/IN-SDMS+2.0-Terms++Conditions_v1_17.05.2023.docx.pdf';
export const X_API_KEY = 'yKuFGR4Yla8hZ8tEas86xahnC5yGIJNw3NDDDAav';
export const TABLET_BREAKPOINT: string = 'tablet';

// Prod
export const GOOLE_CLIENT_ID = '1077373127871-0ik74bb7n29precm21qb2rjqd0cu6b8g.apps.googleusercontent.com';
// Dev
// export const GOOLE_CLIENT_ID = '480030465957-pnnlncss6clu5hkc890tvo2jois741r6.apps.googleusercontent.com';
export const LINKED_IN_CLIENT_ID = '860g9gb78ztstg';
export const FACEBOOK_CLIENT_ID = '930469092088083';

export const CURRENCYCODE: ValuesOfStringOnly = {
  AUD: '$',
  BDT: '৳',
  BTC: '₿',
  CAD: '$',
  CNY: '¥',
  CRC: '₡',
  ETH: 'Ξ',
  EUR: '€',
  GBP: '£',
  GEL: '₾',
  HKD: '$',
  ILS: '₪',
  INR: '₹',
  JPY: '¥',
  KRW: '₩',
  LTC: 'Ł',
  MXN: '$',
  NGN: '₦',
  NZD: '$',
  PHP: '₱',
  PLN: 'zł',
  PYG: '₲',
  RUB: '₽',
  SGD: '$',
  THB: '฿',
  TRY: '₺',
  UAH: '₴',
  USD: '$',
  VND: '₫',
  XMR: 'ɱ',
};
