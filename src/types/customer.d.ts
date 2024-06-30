// CUSTOMER SUMMARY LIST RESPONSE
export interface ICustomersListApiResponse {
    success: boolean;
    data: ICustomerSummary[];
}

export interface ICustomerSummary {
    id: number;
    firstName: string;
    lastName: null | string;
    type: string;
    status: null | string;
    legalName: null | string;
    tradeName: null | string;
    createdAt: string;
    updatedAt: null | string;
    contactInfo: SummaryContactInfo;
}

export interface SummaryContactInfo {
    address: string;
    phone: string;
    email: string;
}

// CUSTOMER DETAILS RESPONSE
export interface CusutomerDetailsAPIResponse {
    success: boolean;
    data: CustomerDetails;
}

export interface CustomerDetails {
    id: number;
    contactInfoId: number;
    firstName: string;
    lastName: string;
    type: string;
    status: string;
    birthdate: null;
    gender: null;
    maritalStatusId: number;
    occupation: null;
    preferredLanguage: null;
    description: null;
    economicActivity: null;
    legalName: null;
    tradeName: null;
    createdAt: Date;
    updatedAt: Date;
    contactInfo: ContactInfo;
    maritalStatus: MaritalStatus;
    contacts: Contact[];
    documents: Document[];
}

export interface ContactInfo {
    id: number;
    countryId: number;
    cityId: number;
    address: string;
    secondAddress: null;
    phone: string;
    secondPhone: null;
    email: string;
    secondEmail: null;
    comment: null;
    updatedAt: Date;
    createdAt: Date;
    city: City;
    country: Country;
}

export interface City {
    id: number;
    name: string;
    countryCode: string;
}

export interface Country {
    id: number;
    name: string;
    code: string;
}

export interface Contact {
    id: number;
    name: string;
    customerId: number;
    contactInfoId: null;
    relationship: string;
    comment: string;
    updatedAt: Date;
    createdAt: Date;
    CustomerId: number;
    contactInfo: null;
}

export interface Document {
    id: number;
    number: string;
    url: string;
    issueDate: null;
    expirationDate: null;
    issuedBy: string;
    comment: string;
    documentTypeId: number;
    customerId: number;
    createdAt: Date;
    updatedAt: Date;
    CustomerId: number;
    type: Type;
}

export interface Type {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    createdAt: null;
    updatedAt: null;
    category: Category;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    createdAt: null;
    updatedAt: null;
}

export interface MaritalStatus {
    id: number;
    name: string;
    description: string;
}
