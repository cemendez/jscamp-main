// ==================================================
// TIPOS PRIMITIVOS EN TYPESCRIPT
// ==================================================

// 1. strings
const nombre = "midudev";
const saludo = `Hola, ${nombre}`;
const vacio: string = "";

// 2. numeros
let color = 0x09f;
let infinito = Infinity;

// 3. booleanos
let isActive: boolean = true;
isActive = false;

// 4. nulos e indefinidos
let nulo: null = null;
let indefinido: undefined = undefined;

let age: number | null = null;

const numerGrande: bigint = 9999999999999999n;
const id: symbol = Symbol("id");
