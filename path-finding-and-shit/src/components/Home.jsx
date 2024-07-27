import React from 'react'
import { HoverEffect } from "../components/ui/HoverEffect";

export function Home() {
  return (
    <div className="w-full h-screen bg-[#31363F]">
      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Dijkstra",
    description:
    "El algoritmo de Dijkstra encuentra el camino más corto desde un nodo origen a todos los demás nodos en un grafo ponderado y no dirigido, minimizando la suma total de los pesos de las aristas",
    link: "/Dijkstra",
  },
  {
    title: "A*",
    description:
    "Bla Bla Bla,Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ",
    link: "https://netflix.com",
  },
  {
    title: "BFS",
    description:
    "Bla Bla Bla,Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ",
    link: "https://google.com",
  },
  {
    title: "DFS",
    description:
    "Bla Bla Bla,Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ",
    link: "https://meta.com",
  },
  {
    title: "Prim",
    description:
    "Bla Bla Bla,Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ",
    link: "https://amazon.com",
  },
  {
    title: "Kruskal",
    description:
      "Bla Bla Bla,Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ",
      link: "https://microsoft.com",
    },
  ];
  export default Home