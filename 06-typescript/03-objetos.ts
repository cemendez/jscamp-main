import type { User, UserEntity, Translations } from "./00-types.ts";

// type User = {
//     name: string;
//     age: number;
// };

const user: User = {
    name: "carlosemendez",
    age: 36,
    role: "admin",
    email: "usuario1@gmail.com",
    company: {
        name: "mi empresa",
        address: "mi direccion",
    },
};

// user.name = "CARLOS";

const otroUser: User = {
    name: "CARLOS",
    age: 28,
    role: "admin",
};

const anotherUser: User = {
    name: "ana",
    role: "editor",
    age: 28,
};

const entity: UserEntity = {
    id: 12345,
    name: "CARLOS",
    age: 36,
    role: "admin",
    email: "[EMAIL_ADDRESS]",
    company: {
        name: "mi empresa",
        address: "mi direccion",
    },
    birthDate: new Date("1989-01-01"),
};

const translations: Translations = {
    hello: "Hola",
    goodbye: "Adios",
};
