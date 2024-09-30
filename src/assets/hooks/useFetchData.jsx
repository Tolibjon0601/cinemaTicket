import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useFetchData(url) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        setError(err.message || "Failed to fetch data");
        toast.error(err.message || "Fetching data failed");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return {
    movies,
    error,
    loading,
  };
}

export default useFetchData;
