import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies, "data");
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    // console.log(movies, "data");
    // this.setState({ movies: movies });
    this.setState({ movies, isLoading: false });
  };

  // getMovies = () => {
  //   const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");

  //   movies
  //     .then((result) => console.log(result, "getMovie OK"))
  //     .catch((err) => console.log(err, "getMovie Error"));
  // };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 5000);

    /* axios is async*/
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {/* {this.state.isLoading ? "로딩중입니다..." : "로딩이 완료되었습니다."} */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">로딩중입니다...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              // console.log(movie);
              return (
                <Movie
                  key={`movie-${movie.id}`}
                  // id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
