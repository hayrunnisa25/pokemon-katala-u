import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const limit = 3;

 useEffect(() => {
    fetch ('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset)
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
      <h1>Pokémon Kataloğu</h1>
      <input
        placeholder="Ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "40px" }}>
        {filtered.map((p) => (
         <div
         key={p.id}
         style={{
         border: "1px solid black",
         padding: "10px",
         borderRadius: "8px",
         textAlign: "center",
         width: "120",
         }}
         >
          <img src={p.sprites.front_default} alt={p.name} />
            <div>{p.name}</div>
            <div>#{p.id}</div>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setOffset(prev => Math.max(prev - limit, 0))}>
        Geri
        </button>
        <span>{page}</span>
        <button onClick={() => setOffset(prev => prev + limit)}>İleri
         </button>
      </div>
    </div>
  );
}
