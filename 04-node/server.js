import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { json } from "node:stream/consumers";

process.loadEnvFile();

const port = process.env.PORT ?? 3000;

function sendJson(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify(data));
}

const users = [
    {
        id: 1,
        name: "Carlos Méndez",
    },
    {
        id: 2,
        name: "José",
    },
    {
        id: 3,
        name: "Fernando",
    },
    {
        name: "Gael",
        id: "0234255b-c24e-48ff-b903-3b8094942d58",
    },
    {
        name: "Samuel",
        id: "9424b649-3bb9-4f77-bafb-6478fb8b66f2",
    },
];

const server = createServer(async (req, res) => {
    const { method, url } = req;

    const [pathname, queryString] = url.split("?");

    const searchParams = new URLSearchParams(queryString);

    if (method === "GET") {
        if (pathname === "/users") {
            const limit = Number(searchParams.get("limit")) || users.length;
            const offset = Number(searchParams.get("offset")) || 0;

            const paginatedUsers = users.slice(offset, offset + limit);

            return sendJson(res, 200, paginatedUsers);
        }

        if (pathname === "/health") {
            return sendJson(res, 200, {
                status: "ok",
                uptime: process.uptime(),
            });
        }
    }

    if (method === "POST") {
        if (pathname === "/users") {
            const body = await json(req);

            if (!body || !body.name) {
                return sendJson(res, 400, { error: "Name is requried" });
            }

            const newUser = {
                name: body.name,
                id: randomUUID(),
            };

            users.push(newUser);

            return sendJson(res, 201, { message: "Usuario creado" });
        }
    }

    return sendJson(res, 404, { error: "Not Found" });
});

server.listen(port, () => {
    const address = server.address();
    console.log(`Servidor escuchando en http://localhost:${address.port}`);
});
