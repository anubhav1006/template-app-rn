export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    address: Address;
    phone: string;
    password: string;
}

export interface Address {
    street: string;
    flat: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}