// ==================================================
// TIPOS PRIMITIVOS EN TYPESCRIPT
// ==================================================

const persona: [string, number] = ["carlos", 36];
const [personaName, personaAge] = persona;

type Coordenadas = [number, number];
const [lat, lon]: Coordenadas = [40.41, -3.7];

type RGB = [number, number, number];
const rojo: RGB = [255, 0, 0];
const verde: RGB = [0, 255, 0];
const azul: RGB = [0, 0, 255];

type Rango = [number, number];
const rangoEdad: Rango = [18, 65];

type EstadoContador = [number, (nuevoValor: number) => void];

type StringYMuchosNumeros = [string, ...number[]];

const datos: StringYMuchosNumeros = ["texto", 1, 2, 3, 4, 5, 6];
