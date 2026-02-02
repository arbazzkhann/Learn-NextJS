"use client";

export default function error({ error }: {
  error: Error
}) {
  return (
    <div>
        <h2>Intentional Error occur</h2>
        <p>Error: {error.message}</p>
    </div>
  );
}