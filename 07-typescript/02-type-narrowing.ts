// type narrowing (estrechamiento de tipos)

// es la técnica de reducir un tipo más amplio a uno más específico mediante comprobaciones

function procesar(valor: number | string) {
    console.log(valor);

    if (typeof valor === "number") {
        console.log("El valor es un número", valor.toFixed(2));
    } else {
        console.log("El valor es una cadena", valor.toUpperCase());
    }
}

function imprmirMensaje(mensaje: string | null | undefined) {
    if (mensaje) {
        console.log(mensaje.toUpperCase());
    }
}

// Operator Narrowing
type Pez = {
    nadar: () => void;
    nombre: string;
};

type Pajaro = {
    volar: () => void;
    nombre: string;
};

type Perro = {
    ladrar: () => void;
    nombre: string;
};

type Animal = Pez | Pajaro | Perro;

function moverAnimal(animal: Animal) {
    if ("nadar" in animal) {
        console.log("El pez está nadando");
        animal.nadar();
    } else if ("volar" in animal) {
        console.log("El pájaro está volando");
        animal.volar();
    } else {
        console.log("el perro está ladrando");
        animal.ladrar();
    }
}

// instanceof Narrowing
function formatDate(value: Date | string): string {
    if (value instanceof Date) {
        return value.toUTCString();
    }

    return new Date(value).toUTCString();
}
