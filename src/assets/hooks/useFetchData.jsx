import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useFetchData(url) {
  const [data, setData] = useState(null); // Changed to null for single data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Fetching data failed");
        toast.error(err.message || "Fetching data failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Include url in the dependency array

  return {
    data,   // Changed to data
    error,
    loading,
  };
}

export default useFetchData;
