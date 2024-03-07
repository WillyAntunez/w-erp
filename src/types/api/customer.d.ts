// * customer list api response
export interface ICustomerSummary {
    id: number;
    name?: string;
    contactInfoId: number;
    firstName: string;
    lastName: string;
    type: 'N' | 'J' | 'B' | 'D';
    status: null | string;
    age: null;
    gender: null;
    maritalStatusId: number;
    occupation: null;
    preferredLanguage: null;
    description: null;
    economicActivity: null;
    legalName: null;
    tradeName: null;
    createdAt: string;
    updatedAt: null | string;
    contactInfo: {
        address: string;
        phone: string;
        email: string;
    };
}

export interface ICustomersListApiResponse {
    success: boolean;
    data: ICustomerSummary[];
}

// * customer by id api response
export interface ICustomerDetailResponse {
    success: boolean;
    data: Data;
}

export interface Data {
    id: number;
    contactInfoId: number;
    firstName: string;
    lastName: string;
    type: string;
    status: string;
    age: null;
    gender: null;
    maritalStatusId: number;
    occupation: null;
    preferredLanguage: null;
    description: null;
    economicActivity: null;
    legalName: null;
    tradeName: null;
    createdAt: string;
    updatedAt: string;
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
    updatedAt: string;
    createdAt: string;
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
    updatedAt: string;
    createdAt: string;
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
    createdAt: string;
    updatedAt: string;
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
