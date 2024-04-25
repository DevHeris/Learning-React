import { useEffect, useState } from "react";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "82589ce2";

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        // Error reset
        setError("");
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
        setIsLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      }
    }

    // In case the search query is an empty string or is less than 3 letters, then we dont need to make a request to the API
    if (query.length < 3) {
      setError("");
      setMovies([]);
      return;
    }

    // handleCloseMovieDetail();
    fetchMovies();

    return () => controller.abort();
  }, [query]);

  return { isLoading, error, movies };
}
