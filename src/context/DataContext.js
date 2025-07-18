import { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({ products: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/products.json").then((res) => res.json()),
      fetch("/categories.json").then((res) => res.json()),
    ])
      .then(([products, categories]) => {
        setData({ products, categories });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load data", err);
        setError("Nie udało się załadować danych.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
