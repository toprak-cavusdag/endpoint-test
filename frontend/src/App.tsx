import { useEffect, useState } from "react";
import api from "./endpoints/api";

const App = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
    currency: string;
    category: string;
    inStock: boolean;
  }

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {data.length > 0 ? (
        data?.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <h1>{item.category}</h1>
          </div>
        ))
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div>
  );
};

export default App;
