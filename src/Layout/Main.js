import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Movies from "../Components/Movies";
import Search from "../Components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading({ loading: true });

    fetch(
      `http://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      });
  };

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Search searchMovies={searchMovies} />
      {loading ? <Loader /> : <Movies movies={movies} />}
    </div>
  );
}
