import os from "node:os";
import ms from "ms";

console.log("Información del sistema operativo");

console.log("Tipo de SO:", os.type());
console.log("Plataforma:", os.platform());
console.log("Arquitectura:", os.arch());
console.log("Memoria total:", os.totalmem());
console.log("Memoria libre:", os.freemem());
console.log("Directorio home del usuario:", os.homedir());
console.log("Tiempo de actividad del sistema", ms(os.uptime() * 1000, { long: true }));
console.log("Número de procesadores:", os.cpus().length);
// console.log("CPUS:", os.cpus());
// console.log("Interfaces de red", os.networkInterfaces());

console.log("Memoria disponible:", os.totalmem() - os.freemem());
