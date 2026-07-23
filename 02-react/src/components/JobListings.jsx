import { JobCard } from "./JobCard.jsx";

export function JobListings({ jobs }) {
    return (
        <>
            <div className="jobs-listings">
                {jobs.length === 0 && (
                    <p
                        style={{
                            textAlign: "center",
                            padding: "1rem",
                            textWrap: "balance",
                        }}
                    >
                        No hay ofertas de empleo que coincidan con tu búsqueda.
                    </p>
                )}

                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </>
    );
}
