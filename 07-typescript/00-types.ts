export type Company = {
    name: string;
    address: string;
    phone?: string;
};

type UserId = {
    readonly id: string | number;
};

type UserWithBirthDate = {
    birthDate: Date;
};

export type User = {
    readonly name: string;
    readonly age: number;
    email?: string;
    company?: Company;
    role: "admin" | "user" | "editor";
};

export type UserEntity = User & UserId & UserWithBirthDate;

export type Configuration = {
    readonly apiKey: string;
    readonly theme?: "dark" | "light";
};

type Level = 1 | 2 | 3 | 4 | 5;
type Direction = "up" | "down" | "left" | "right";

export type Translations = {
    [key: string]: string;
};
