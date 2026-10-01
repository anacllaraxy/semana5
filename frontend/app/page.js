"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("/api/health/")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setErro("Não foi possível falar com o backend"));
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Semana 5 - Containerização e CI/CD</h1>
      {erro && <p>{erro}</p>}
      {!data && !erro && <p>Carregando...</p>}
      {data && (
        <>
          <p>Status: {data.status}</p>
          <ul>
            {data.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}