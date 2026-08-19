// ==================================
// INTERFACES EN TYPESCRIPT
// ==================================

// las interfaces definen la "forma" de un objeto. Son contratos que especifican que propiedades y métodos debe tener

interface Persona {
    readonly name: string;
    readonly age: number;
}

interface Identificable {
    id: `user-${number}`;
}

interface User extends Persona, Identificable {
    email: string;
    role: "admin" | "user" | "editor";
    saludar: () => string;
}

const user: User = {
    id: "user-12345",
    name: "carlos",
    age: 36,
    email: "mcalderon.carlos@gmail.com",
    role: "admin",
    saludar: () => "Hola",
};

interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

interface AudioPlayer {
    volumen: number;
}

class VideoPlayer implements MediaPlayer, AudioPlayer {
    volumen: number = 50;

    play() {
        console.log("play");
    }
    pause() {
        console.log("pause");
    }
    stop() {
        console.log("stop");
    }
}
