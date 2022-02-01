const MoviesList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => {
        return <img src={movie} alt="movie" key={index} />;
      })}
    </div>
  );
};

export default MoviesList;
