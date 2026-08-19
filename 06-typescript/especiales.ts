// ================================
// ANY, UNKNOWN, VOID, NEVER
// ================================

// Any desactiva TypeScript
let cualquiercosa: any = "hola";
cualquiercosa = 42;
cualquiercosa = true;

const result = cualquiercosa + 8;

// unknown es seguro
let valorDesonocido: unknown = "hola";
valorDesonocido = 42;
valorDesonocido = true;
valorDesonocido = { nombre: "test" };

// type narrowing
if (typeof valorDesonocido === "number") {
    const resultadoSeguro = valorDesonocido + 8;
    console.log(resultadoSeguro);
} else if (typeof valorDesonocido == "string") {
    console.log(valorDesonocido.toUpperCase());
}

// caso de uso
function parseJSON(jsonString: string): unknown {
    return JSON.parse(jsonString);
}

const usuario = parseJSON('{"name": "Ana", "age": 25}');

if (typeof usuario === "object" && usuario != null && "nombre" in usuario) {
    console.log((usuario as { nombre: string }).nombre);
}
