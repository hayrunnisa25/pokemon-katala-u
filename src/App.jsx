import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const limit = 3;

  useEffect(() => {
 fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((r) => r.json())
      .then((d) =>
        Promise.all(d.results.map((p) => fetch(p.url).then((r) => r.json())))
      )
      .then(setData);
  }, [offset]);

  const filtered = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pokemon Kataloğu</h1>
      <input
        placeholder="Ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              border: "3px solid black",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              width: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              {p.name}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                fontSize: "14px",
              }}
            >
              <div>Tip: {p.types[0].type.name}</div>
              <div>Boy: {p.height / 10} m</div>
              <div>Kilo: {p.weight / 10} kg</div>
            </div>

            <img src={p.sprites.front_default} alt={p.name} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            setOffset((prev) => Math.max(prev - limit, 0));
            setPage((prev) => Math.max(prev - 1, 1));
          }}
        >
          Geri
        </button>

        <span style={{ margin: "0 10px" }}>{page}</span>

        <button
          onClick={() => {
            setOffset((prev) => prev + limit);
            setPage((prev) => prev + 1);
          }}
        >
          İleri
        </button>
      </div>
    </div>
  );
}
