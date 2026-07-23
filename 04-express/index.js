import express from "express";

import jobs from "./jobs.json" with { type: "json" };
import { DEFAULTS } from "./config.js";

const PORT = process.env.PORT ?? DEFAULTS.PORT;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const timeString = new Date().toLocaleTimeString("es-MX");
    console.log(`[${timeString}] ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    return res.send("<h1>Esto es una prueba</h1>");
});

app.get("/health", (req, res) => {
    return res.json({
        status: "ok",
        uptime: process.uptime(),
    });
});

app.get("/jobs", (req, res) => {
    const {
        text,
        title,
        level,
        limit = DEFAULTS.LIMIT_PAGINATION,
        technology,
        offset = DEFAULTS.OFFSET_PAGINATION,
    } = req.query;

    let filteredJobs = jobs;

    if (text) {
        const searchTerm = text.toLowerCase();
        filteredJobs = filteredJobs.filter(
            (job) =>
                job.titulo.toLowerCase().includes(searchTerm) ||
                job.descripcion.toLowerCase().includes(searchTerm),
        );
    }

    if (technology) {
        filteredJobs = filteredJobs.filter((job) =>
            job.tecnologias.includes(technology),
        );
    }

    const limitNumber = Number(limit);
    const offsetNumber = Number(offset);

    const paginatedJobs = filteredJobs.slice(
        offsetNumber,
        offsetNumber + limitNumber,
    );

    return res.json({
        data: paginatedJobs,
        total: filteredJobs.length,
        limit: limitNumber,
        offset: offsetNumber,
    });
});

app.get("/jobs/:id", (req, res) => {
    const { id } = req.params;

    const job = jobs.find((job) => job.id === id);

    if (!job) {
        return res.status(404).json({ error: "Job not found" });
    }

    return res.json(job);
});

// Crear un nuevo puesto
app.post("/jobs", (req, res) => {
    const { titulo, empresa, ubicacion, data } = req.body;

    const newJob = {
        id: crypto.randomUUID(),
        titulo,
        empresa,
        ubicacion,
        data,
    };

    jobs.push(newJob);

    return res.status(201).json(newJob);
});

// Actualizar un puesto completamente
app.put("/jobs/:id", (req, res) => {});

// Actualizar un campo específico de un puesto
app.patch("/jobs/:id", (req, res) => {});

// Eliminar un puesto
app.delete("/jobs/:id", (req, res) => {});

app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
});
